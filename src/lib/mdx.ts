import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'src/content');

export async function getMDXContent(locale: string, type: 'actualites' | 'evenements') {
  const dirPath = path.join(CONTENT_PATH, locale, type);
  
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs.readdirSync(dirPath);
  
  const content = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        slug: file.replace('.mdx', ''),
        ...data,
        content,
      };
    });

  return content.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getMDXBySlug(locale: string, type: 'actualites' | 'evenements', slug: string) {
  const filePath = path.join(CONTENT_PATH, locale, type, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    ...data,
    content,
  };
}
