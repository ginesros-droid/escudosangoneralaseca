"""
Genera una versión "para publicar" del sitio (escudo-interactivo/publicar/):
- HTML/CSS/JS con comentarios y saltos de línea superfluos eliminados.
- Mismos archivos assets/ (la imagen del escudo).
No es una ofuscación real (ver aviso en README): solo reduce la
legibilidad casual y el tamaño de los archivos.
"""
import re
import shutil
from pathlib import Path

# Se asume que este script vive en escudo-interactivo/herramientas/
ORIGEN = Path(__file__).resolve().parent.parent
DESTINO = ORIGEN / "publicar"


def minificar_css(texto):
    # Quita comentarios /* ... */
    texto = re.sub(r"/\*.*?\*/", "", texto, flags=re.DOTALL)
    # Colapsa espacios en blanco
    texto = re.sub(r"\s+", " ", texto)
    texto = re.sub(r"\s*([{}:;,])\s*", r"\1", texto)
    texto = texto.replace(";}", "}")
    return texto.strip()


def quitar_comentarios_js(texto):
    out = []
    en_bloque = False
    for linea in texto.split("\n"):
        if en_bloque:
            fin = linea.find("*/")
            if fin == -1:
                continue
            linea = linea[fin + 2:]
            en_bloque = False
        stripped = linea.strip()
        # Comentario de bloque que empieza y no termina en la misma línea
        inicio_bloque = stripped.startswith("/*") and "*/" not in stripped
        if inicio_bloque:
            en_bloque = True
            continue
        # Línea de comentario simple completa (no tocamos '//' dentro de strings/URLs:
        # en este proyecto no se usan, se ha comprobado manualmente).
        if stripped.startswith("//"):
            continue
        if stripped == "":
            continue
        out.append(linea.rstrip())
    return "\n".join(out)


def minificar_html(texto):
    texto = re.sub(r"<!--(?!\[if).*?-->", "", texto, flags=re.DOTALL)
    lineas = [l.strip() for l in texto.split("\n")]
    lineas = [l for l in lineas if l != ""]
    return "\n".join(lineas)


def main():
    if DESTINO.exists():
        shutil.rmtree(DESTINO)
    (DESTINO / "css").mkdir(parents=True)
    (DESTINO / "js").mkdir(parents=True)
    (DESTINO / "assets").mkdir(parents=True)

    html = (ORIGEN / "index.html").read_text(encoding="utf-8")
    html_min = minificar_html(html)
    (DESTINO / "index.html").write_text(html_min, encoding="utf-8")

    css = (ORIGEN / "css" / "styles.css").read_text(encoding="utf-8")
    css_min = minificar_css(css)
    (DESTINO / "css" / "styles.css").write_text(css_min, encoding="utf-8")

    for nombre in ["app.js", "proteccion.js"]:
        js = (ORIGEN / "js" / nombre).read_text(encoding="utf-8")
        js_min = quitar_comentarios_js(js)
        (DESTINO / "js" / nombre).write_text(js_min, encoding="utf-8")

    shutil.copy2(
        ORIGEN / "assets" / "Escudo_Sangonera_La_Seca.jpg",
        DESTINO / "assets" / "Escudo_Sangonera_La_Seca.jpg",
    )

    def tam(p):
        return p.stat().st_size

    print("index.html:", tam(ORIGEN / "index.html"), "->", tam(DESTINO / "index.html"))
    print("styles.css:", tam(ORIGEN / "css" / "styles.css"), "->", tam(DESTINO / "css" / "styles.css"))
    print("app.js:", tam(ORIGEN / "js" / "app.js"), "->", tam(DESTINO / "js" / "app.js"))
    print("proteccion.js:", tam(ORIGEN / "js" / "proteccion.js"), "->", tam(DESTINO / "js" / "proteccion.js"))


if __name__ == "__main__":
    main()
