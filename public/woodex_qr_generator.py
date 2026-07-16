import qrcode
from PIL import Image, ImageDraw, ImageFilter
import numpy as np
import os

def create_woodex_qr(data, logo_path, output_path="woodex_branded_qr.png",
                     qr_color=(34, 87, 55),      # Woodex forest green #225737
                     bg_color=(249, 245, 235),    # Woodex beige #F9F5EB
                     accent_color=(212, 175, 55), # Woodex gold #D4AF37
                     wood_texture=True):
    """
    Create a Woodex-style branded QR code with CENTER logo and wooden texture.
    """
    
    # 1. Generate a high-quality standard QR code
    qr = qrcode.QRCode(
        version=5,  # Controls size
        error_correction=qrcode.constants.ERROR_CORRECT_H,  # High error correction for center logo
        box_size=12,
        border=2,
    )
    qr.add_data(data)
    qr.make(fit=True)
    
    # Create QR image with custom colors
    qr_img = qr.make_image(fill_color=qr_color, back_color=bg_color).convert('RGB')
    
    # Convert to numpy array for pixel manipulation
    qr_array = np.array(qr_img)
    
    # 2. Create wooden texture background
    base = Image.new('RGB', (1000, 1000), bg_color)
    
    if wood_texture:
        # Create wooden grain texture
        wood_array = np.array(base)
        
        # Add wood grain lines
        for i in range(1000):
            # Horizontal wood grain lines
            intensity = np.random.randint(0, 30)
            wood_array[i, :, 0] = np.clip(wood_array[i, :, 0] - intensity, 0, 255)
            wood_array[i, :, 1] = np.clip(wood_array[i, :, 1] - intensity // 2, 0, 255)
            wood_array[i, :, 2] = np.clip(wood_array[i, :, 2] - intensity // 3, 0, 255)
            
            # Add occasional dark rings (knots)
            if i % 50 == 0:
                knot_pos = np.random.randint(0, 1000)
                for j in range(-20, 20):
                    if 0 <= knot_pos + j < 1000:
                        wood_array[i, knot_pos + j, :] = wood_array[i, knot_pos + j, :] * 0.7
        
        base = Image.fromarray(wood_array)
    
    # 3. Add leaf pattern overlay
    draw = ImageDraw.Draw(base)
    try:
        leaf = Image.new('RGBA', (100, 100), (0,0,0,0))
        leaf_draw = ImageDraw.Draw(leaf)
        leaf_draw.polygon([(50, 10), (70, 40), (80, 70), (50, 90), (20, 70), (30, 40)], 
                          fill=(*accent_color, 20))  # Very transparent gold
        for x in range(0, 1000, 120):
            for y in range(0, 1000, 120):
                base.paste(leaf, (x, y), leaf)
    except:
        pass
    
    # 4. Resize QR and paste onto wooden background
    qr_img = qr_img.resize((800, 800), Image.Resampling.LANCZOS)
    qr_x = (base.width - qr_img.width) // 2
    qr_y = (base.height - qr_img.height) // 2 - 20
    base.paste(qr_img, (qr_x, qr_y))
    
    # 5. Add wooden border/frame
    border_width = 25
    draw = ImageDraw.Draw(base)
    
    # Outer gold border
    for i in range(border_width):
        draw.rectangle([(i, i), (base.width-1-i, base.height-1-i)], 
                       outline=(*accent_color, 255 - 8*i), width=2)
    
    # 6. Load and paste logo in the CENTER of QR code
    try:
        if os.path.exists(logo_path):
            logo = Image.open(logo_path).convert('RGBA')
            logo_size = 180  # Slightly larger for center placement
            logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
            
            # Create circular mask for logo
            mask = Image.new('L', (logo_size, logo_size), 0)
            mask_draw = ImageDraw.Draw(mask)
            mask_draw.ellipse((0, 0, logo_size, logo_size), fill=255)
            
            # Position logo in the CENTER of QR code
            # QR code is at (qr_x, qr_y) and size is 800x800
            qr_center_x = qr_x + (qr_img.width // 2)
            qr_center_y = qr_y + (qr_img.height // 2)
            
            logo_x = qr_center_x - (logo_size // 2)
            logo_y = qr_center_y - (logo_size // 2)
            
            # Create white background behind logo for better visibility
            white_bg = Image.new('RGBA', (logo_size + 10, logo_size + 10), (255, 255, 255, 200))
            bg_x = logo_x - 5
            bg_y = logo_y - 5
            base.paste(white_bg, (bg_x, bg_y), white_bg)
            
            # Paste logo
            base.paste(logo, (logo_x, logo_y), mask)
            
            # Add gold ring around center logo
            ring_margin = 8
            ring_draw = ImageDraw.Draw(base)
            ring_draw.ellipse((logo_x - ring_margin, logo_y - ring_margin, 
                               logo_x + logo_size + ring_margin, logo_y + logo_size + ring_margin), 
                              outline=accent_color, width=5)
            
            # Add inner glow effect
            ring_draw.ellipse((logo_x - ring_margin + 3, logo_y - ring_margin + 3, 
                               logo_x + logo_size + ring_margin - 3, logo_y + logo_size + ring_margin - 3), 
                              outline=(*accent_color, 150), width=2)
            
            print(f"✅ Logo placed at center of QR code")
        else:
            print(f"⚠️ Logo not found at: {logo_path}")
    except Exception as e:
        print(f"⚠️ Logo could not be loaded: {e}")
    
    # 7. Add "WOODEX" branding text above QR
    draw = ImageDraw.Draw(base)
    try:
        from PIL import ImageFont
        font_large = ImageFont.truetype("georgia.ttf", 36)
        font_small = ImageFont.truetype("georgia.ttf", 24)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
   
    # 9. Save the final image
    base.save(output_path, "PNG")
    print(f"✅ Woodex-style QR code saved as: {output_path}")
    return base

# ---------- Run the generator ----------
if __name__ == "__main__":
    # Your website URL
    website_url = "https://www.woodexmumbai.com/"
    
    # Your logo path (in public folder)
    logo_file = "logo.png"
    
    print("🚀 Generating Woodex-style QR Code with CENTER LOGO...")
    print("🌲 Wooden texture will be applied to the design")
    print(f"📍 Logo path: {logo_file}")
    print(f"🔗 URL: {website_url}")
    print()
    
    # Generate the styled QR code
    create_woodex_qr(
        data=website_url,
        logo_path=logo_file,
        output_path="woodex_branded_qr.png",
        qr_color=(34, 87, 55),      # Woodex Forest Green
        bg_color=(249, 245, 235),    # Woodex Beige
        accent_color=(212, 175, 55), # Woodex Gold
        wood_texture=True            # Enable wooden texture
    )
    
    print("\n✨ QR Code generated successfully!")
    print("📁 File saved as: woodex_branded_qr.png")
    print("🎯 Logo is placed in the CENTER of the QR code")
    print("🌳 Wooden texture applied to the design")
    print("📱 Scan the QR code to test if it works")