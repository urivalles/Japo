import zipfile
import xml.etree.ElementTree as ET
import glob

docx_files = glob.glob('*.docx')
for docx_file in docx_files:
    try:
        with zipfile.ZipFile(docx_file) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            NAMESPACES = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            text_nodes = []
            for node in tree.iterfind('.//w:p', namespaces=NAMESPACES):
                paragraph_text = "".join([t.text for t in node.iterfind('.//w:t', namespaces=NAMESPACES) if t.text])
                text_nodes.append(paragraph_text)
            
            with open('pla_estrategic.txt', 'w', encoding='utf-8') as f:
                f.write('\n'.join(text_nodes))
            print(f"Extracted {docx_file} to pla_estrategic.txt")
    except Exception as e:
        print(f"Error processing {docx_file}: {e}")
