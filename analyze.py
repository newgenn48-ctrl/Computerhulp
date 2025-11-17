import os
import re

APP_DIR = r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\Computerhulpzh\app"

def extract_metadata(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        metadata_match = re.search(r'export const metadata:\s*Metadata\s*=\s*{', content)
        if not metadata_match:
            return None
        
        title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", content)
        title = title_match.group(1) if title_match else None
        
        desc_match = re.search(r"description:\s*['\"]([^'\"]+)['\"]", content)
        description = desc_match.group(1) if desc_match else None
        
        og_title_match = re.search(r"openGraph:\s*{[^}]*title:\s*['\"]([^'\"]+)['\"]", content, re.DOTALL)
        og_title = og_title_match.group(1) if og_title_match else None
        
        og_desc_match = re.search(r"openGraph:\s*{[^}]*description:\s*['\"]([^'\"]+)['\"]", content, re.DOTALL)
        og_description = og_desc_match.group(1) if og_desc_match else None
        
        canonical_match = re.search(r"canonical:\s*['\"]([^'\"]+)['\"]", content)
        canonical = canonical_match.group(1) if canonical_match else None
        
        has_keywords = 'keywords:' in content
        
        return {
            'title': title,
            'description': description,
            'og_title': og_title,
            'og_description': og_description,
            'canonical': canonical,
            'has_keywords': has_keywords,
            'has_metadata': True
        }
    except Exception as e:
        return {'error': str(e), 'has_metadata': False}

def analyze_metadata(metadata):
    issues = []
    
    if not metadata or not metadata.get('has_metadata'):
        return [{'priority': 'CRITICAL', 'issue': 'No metadata found'}]
    
    title = metadata.get('title')
    if not title:
        issues.append({'priority': 'CRITICAL', 'issue': 'Missing title'})
    else:
        title_len = len(title)
        if title_len > 70:
            issues.append({'priority': 'HIGH', 'issue': f'Title too long: {title_len} chars (max 70)'})
        elif title_len < 50:
            issues.append({'priority': 'MEDIUM', 'issue': f'Title too short: {title_len} chars (min 50)'})
        elif title_len > 60:
            issues.append({'priority': 'LOW', 'issue': f'Title longer than optimal: {title_len} chars (optimal 60)'})
    
    description = metadata.get('description')
    if not description:
        issues.append({'priority': 'CRITICAL', 'issue': 'Missing description'})
    else:
        clean_desc = re.sub(r'[\U00010000-\U0010ffff]', '', description)
        desc_len = len(clean_desc)
        
        if desc_len > 160:
            issues.append({'priority': 'HIGH', 'issue': f'Description too long: {desc_len} chars (max 160)'})
        elif desc_len < 150:
            issues.append({'priority': 'MEDIUM', 'issue': f'Description too short: {desc_len} chars (min 150)'})
    
    if not metadata.get('og_title'):
        issues.append({'priority': 'MEDIUM', 'issue': 'Missing OpenGraph title'})
    
    if not metadata.get('og_description'):
        issues.append({'priority': 'MEDIUM', 'issue': 'Missing OpenGraph description'})
    
    if not metadata.get('canonical'):
        issues.append({'priority': 'HIGH', 'issue': 'Missing canonical URL'})
    
    if metadata.get('has_keywords'):
        issues.append({'priority': 'LOW', 'issue': 'Using deprecated keywords field'})
    
    return issues if issues else [{'priority': 'OK', 'issue': 'No issues found'}]

def main():
    print("=" * 100)
    print("COMPLETE METADATA ANALYSIS")
    print("=" * 100)
    
    pages = []
    for root, dirs, files in os.walk(APP_DIR):
        if 'page.tsx' in files:
            pages.append(os.path.join(root, 'page.tsx'))
    
    pages = sorted(pages)
    print(f"\nFound {len(pages)} pages\n")
    
    all_results = []
    all_titles = {}
    
    for page_path in pages:
        rel_path = os.path.relpath(page_path, APP_DIR)
        
        print(f"\n{'=' * 100}")
        print(f"PAGE: {rel_path}")
        print('=' * 100)
        
        metadata = extract_metadata(page_path)
        issues = analyze_metadata(metadata)
        
        if metadata and metadata.get('has_metadata'):
            title = metadata.get('title', 'N/A')
            description = metadata.get('description', 'N/A')
            
            print(f"\nTITLE: {title}")
            print(f"Length: {len(title) if title != 'N/A' else 0} chars")
            
            if description != 'N/A':
                clean_desc = re.sub(r'[\U00010000-\U0010ffff]', '', description)
                print(f"\nDESCRIPTION: {description[:100]}...")
                print(f"Length: {len(clean_desc)} chars")
            
            print(f"\nCANONICAL: {metadata.get('canonical', 'N/A')}")
            
            if title != 'N/A':
                if title in all_titles:
                    all_titles[title].append(rel_path)
                else:
                    all_titles[title] = [rel_path]
        
        print("\nISSUES:")
        for issue in issues:
            priority = issue['priority']
            symbol = {'CRITICAL': 'X', 'HIGH': '!', 'MEDIUM': '*', 'LOW': '-', 'OK': 'OK'}.get(priority, '?')
            print(f"  [{symbol}] {priority}: {issue['issue']}")
        
        all_results.append({'path': rel_path, 'metadata': metadata, 'issues': issues})
    
    print("\n\n" + "=" * 100)
    print("SUMMARY")
    print("=" * 100)
    
    critical = sum(1 for r in all_results for i in r['issues'] if i['priority'] == 'CRITICAL')
    high = sum(1 for r in all_results for i in r['issues'] if i['priority'] == 'HIGH')
    medium = sum(1 for r in all_results for i in r['issues'] if i['priority'] == 'MEDIUM')
    low = sum(1 for r in all_results for i in r['issues'] if i['priority'] == 'LOW')
    
    print(f"\nTotal Pages: {len(pages)}")
    print(f"CRITICAL Issues: {critical}")
    print(f"HIGH Issues: {high}")
    print(f"MEDIUM Issues: {medium}")
    print(f"LOW Issues: {low}")
    
    print("\nDUPLICATE TITLES:")
    duplicates = {k: v for k, v in all_titles.items() if len(v) > 1}
    if duplicates:
        for title, paths in duplicates.items():
            print(f"\n  Title: '{title}'")
            print(f"  Found on {len(paths)} pages")
    else:
        print("  None found")

if __name__ == "__main__":
    main()
