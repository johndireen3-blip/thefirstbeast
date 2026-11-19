import re,json,sys
def jsx(t):
    t=t.replace('{','&#123;').replace('}','&#125;')
    t=re.sub(r'\[([^\]]+)\]\((https?://[^)]+)\)',r'<a href="\2" target="_blank" rel="noopener noreferrer">\1</a>',t)
    t=re.sub(r'\*([^*]+)\*',r'<em>\1</em>',t)
    return t
def make(ch,intro,related,rows,out):
    o=["import type { FathersData } from '@/components/fathers-section';","","export const fathers: FathersData = {",f"\tchapter: {ch},",f"\tintro: <>{jsx(intro)}</>,","\trelated: ["]
    for to,label in related: o.append(f"\t\t{{ to: {json.dumps(to)}, label: {json.dumps(label,ensure_ascii=False)} }},")
    o.append("\t],\n\trows: [")
    for i,(ref,title,pts) in enumerate(rows,1):
        o.append(f"\t\t{{ number: '{i:02d}', reference: {json.dumps('REVELATION '+ref,ensure_ascii=False)}, title: {json.dumps(title,ensure_ascii=False)}, points: [")
        for label,body in pts:
            o.append(f"\t\t\t{{ label: {json.dumps(label,ensure_ascii=False)}, body: <>{jsx(body)}</> }},")
        o.append("\t\t] },")
    o.append("\t],\n};\n")
    open(out,'w',encoding='utf-8').write("\n".join(o))
def wire(ch,web):
    p=f'{web}/src/routes/chapter-{ch}.tsx'; s=open(p).read()
    if 'FathersSection' in s: return
    assert "<Endurance /><WhereItFits />" in s
    s=s.replace("<Endurance /><WhereItFits />","<Endurance /><FathersSection data={fathers} /><WhereItFits />")
    i=s.index("\nexport function meta")
    s=s[:i]+f"import {{ FathersSection }} from '@/components/fathers-section';\nimport {{ fathers }} from '@/data/fathers/chapter-{ch}';\n"+s[i:]
    open(p,'w').write(s)
