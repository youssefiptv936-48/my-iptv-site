import P from "./HtmlTools/P";
import { ReactNode } from "react";
import H2 from "./HtmlTools/H2";

interface Props {
  title: string;
  paragraph: string;
  children: ReactNode;
  ButtonUrl: ReactNode;
}

export default function ArticleCard({ title, paragraph, children, ButtonUrl }: Props) {
  return (
    <article
      className="md:max-w-70 min-h-96 border-2 p-0.5 border-solid border-[#ff0000] rounded-xl flex flex-col items-center overflow-hidden"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* القسم العلوي (الأيقونة) - أخذ 40% من الارتفاع */}
      <div className="h-[40%] relative flex justify-center items-center py-4">
        {children}
      </div>
         <div className="bg-red-500 h-0.5 w-32 text-transparent">.</div>
      {/* القسم السفلي (النصوص والزر) - أخذ باقي المساحة */}
      <div className="flex-1  p-3 flex flex-col justify-between items-center">
        
        <div className="mb-4 text-center">
          <H2>{title}</H2>
          
             <P>{paragraph}</P>
          
        </div>

        {/* وضع الزر في الأسفل دائماً */}
        
          {ButtonUrl}
        
        
      </div>
    </article>
  );
}