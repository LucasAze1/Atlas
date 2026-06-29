from PIL import Image
import os

pdf_pages_dir = r"c:\Users\lucas\OneDrive\Desktop\Nueva carpeta (3)\pdf_pages"
page_15_path = os.path.join(pdf_pages_dir, "page_15.png")
output_path = r"c:\Users\lucas\OneDrive\Desktop\Nueva carpeta (3)\atlas-web\assets\logo\logo.png"

try:
    img = Image.open(page_15_path)
    width, height = img.size
    
    # Recorte aproximado del logo en la página 15
    # La página 15 tiene el logo en la parte inferior central.
    # Tamaño típico de la imagen 1920x1080
    left = width * 0.40
    top = height * 0.60
    right = width * 0.60
    bottom = height * 0.92
    
    logo_crop = img.crop((left, top, right, bottom))
    logo_crop.save(output_path)
    print("Logo recortado exitosamente.")
except Exception as e:
    print(f"Error: {e}")
