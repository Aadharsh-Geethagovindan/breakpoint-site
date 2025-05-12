import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import './LoreSection.css';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkSlug from 'remark-slug';
import { useRef } from 'react'; // make sure this is at the top
export default function LoreSection({sectionId, onHeadingsExtracted,setActiveHeading }) {
  const [content, setContent] = useState('');
  const contentRef = useRef();
 
  useEffect(() => {
    fetch(`/lore/${sectionId}.md`)
      .then(res => res.text())
      .then(text => {
        setContent(text);
       
        // Parse markdown to extract ## headings
        const tree = unified().use(remarkParse).parse(text);
        const headings = [];

              tree.children.forEach(node => {
              if (node.type === 'heading' && node.depth === 2) {
                const rawText = node.children
                  .filter(child => typeof child.value === 'string')
                  .map(child => child.value)
                  .join('')
                  .trim();

                if (rawText.length > 0) {
                  const id = rawText
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '') // Remove punctuation
                    .replace(/\s+/g, '-')     // Spaces to dashes
                    .trim();

                  headings.push({ text: rawText, id });
                }
              }
      });


        if (onHeadingsExtracted) onHeadingsExtracted(headings);
        console.log(`Extracted ${headings.length} subheadings from ${sectionId}`);
      });
  }, [sectionId]);

  useEffect(() => {
  const handleScroll = () => {
      const headings = contentRef.current?.querySelectorAll('h2[id]');
      let closest = null;
      let minDistance = Infinity;

      headings.forEach(h => {
        const id = h.getAttribute('id')?.trim();
        const text = h.innerText?.trim();

        // Only consider headings with both a valid ID and visible text
        if (!id || !text) return;

        const rect = h.getBoundingClientRect();
        const distance = Math.abs(rect.top - 100);
        if (rect.top <= 150 && distance < minDistance) {
          closest = h;
          minDistance = distance;
        }
      });

      if (closest) {
        const id = closest.getAttribute('id');
        setActiveHeading(id);
      }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [content]);

  return (
    <div className='lore-content' ref={contentRef}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkSlug]} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
}

  