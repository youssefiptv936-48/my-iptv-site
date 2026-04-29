import P from "./HtmlTools/P";
import { ReactNode } from "react";
import H2 from "./HtmlTools/H2";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  ButtonUrl: ReactNode;
}

export default function ArticleCard({ title, description, children, ButtonUrl }: Props) {
  return (
    <article
      className="  md:max-w-70 h-[28em] md:mt-15 border-2 p-0.5 border-solid border-[#ff0000] rounded-xl flex flex-col items-center overflow-hidden"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* القسم العلوي (الأيقونة) - أخذ 40% من الارتفاع */}
      <div className="h-[40%] relative flex justify-center items-center py-4">
        {children}
      </div>
         <div className="bg-red-500 h-0.5 w-32 text-transparent">.</div>
      {/* القسم السفلي (النصوص والزر) - أخذ باقي المساحة */}
      <div className="    p-3 flex flex-col h-72">
        
        <div className="mb-4 p-x-2  text-center">
          <H2>{title}</H2>
          
             <P>{description}</P>
          
        </div>

        
        <div >
           {ButtonUrl}
        </div>
          
        
        
      </div>
    </article>
  );
}