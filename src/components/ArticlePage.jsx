import { Helmet } from "react-helmet";

const Section = ({ title, paragraphs }) => (
  <section className="mb-12">
    <h2 className="text-left text-2xl md:text-3xl font-light text-moss mb-4">{title}</h2>
    <div className="space-y-4 text-base leading-relaxed">
      {paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  </section>
);

const ArticlePage = ({ 
  title, 
  description, 
  keywords, 
  lastEdited, 
  author = "Sam Cabrera", 
  sections = [] 
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-sans">

        <header className="mb-12 border-b border-gray-200 pb-12">
          <h1 className="text-5xl md:text-6xl font-light text-moss text-left tracking-wide mb-8">
            {title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>By {author}</span>
            <span className="mx-2">•</span>
            <span>Last Edited: {lastEdited}</span>
          </div>
          <p className="text-lg md:text-xl leading-relaxed">{description}</p>
        </header>

        {/* Article Sections */}
        {sections.map((section, idx) => (
          <Section key={idx} title={section.title} paragraphs={section.paragraphs} />
        ))}
      </div>
    </>
  );
};

export default ArticlePage;
