import re

def minify_css(css_content):
    # Remove comments
    css_content = re.sub(r'/\*.*?\*/', '', css_content, flags=re.DOTALL)
    # Remove extra whitespace and newlines
    css_content = re.sub(r'\s+', ' ', css_content)
    # Remove spaces around colons, semicolons, braces, commas
    css_content = re.sub(r'\s*:\s*', ':', css_content)
    css_content = re.sub(r'\s*;\s*', ';', css_content)
    css_content = re.sub(r'\s*{\s*', '{', css_content)
    css_content = re.sub(r'\s*}\s*', '}', css_content)
    css_content = re.sub(r'\s*,\s*', ',', css_content)
    # Remove trailing semicolons before closing braces
    css_content = re.sub(r';}', '}', css_content)
    # Remove leading/trailing whitespace
    css_content = css_content.strip()
    return css_content

# Read the CSS file
with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

print(f"Original CSS length: {len(css)}")

# Minify
minified = minify_css(css)

print(f"Minified CSS length: {len(minified)}")

# Write back
with open('assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(minified)

print("CSS file minified successfully.")
