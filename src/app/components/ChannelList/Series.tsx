import React, { Dispatch, SetStateAction } from "react";
import Div from "../HtmlTools/Div";
import SpanHover from "../HtmlTools/SpanHover";
// تعريف الواجهة لضمان سلامة البيانات
interface SeriesProps {
  activeSub: number;
  setActiveSub: Dispatch<SetStateAction<number>>;
}

export default function Series({ activeSub, setActiveSub }: SeriesProps) {
  // 1. تجميع كل المسلسلات في مصفوفة واحدة
  const seriesCategories = [
    "VOD - DISNEY+ SERIES MENA",
    "VOD - DISCOVERY+ SERIES MENA",
    "VOD - OSN+ SERIES 4K 3840P",
    "VOD - ASIA SERIES (MULTI-SUBS)",
    "VOD - 4K DOLBY AUDIO مسلسلات عربية",
    "VOD - مسلسلات عربية فائقة الوضوح",
    "VOD - مسلسلات شاهد فائقة الوضوح",
    "VOD - مسلسلات تود فائقة الوضوح",
    "VOD - مسلسلات تركية فائقة الوضوح",
    "VOD - DOLBY AUDIO مسلسلات عربية",
    "VOD - مسلسلات شاهد الأصلية",
    "VOD - WATCH IT مسلسلات واتش ات الأصلية",
    "VOD - مسلسلات تود الأصليه",
    "VOD - مسلسلات فيو الأصلية",
    "VOD - مسلسلات الشام العدية",
    "VOD - مسلسلات سورية لبنانية",
    "VOD - مسلسلات مصريه",
    "VOD - مسلسلات خليجية",
    "VOD - مسلسلات عراقية",
    "VOD - مسلسلات مغربية",
    "VOD - مسلسلات تونسية",
    "VOD - مسلسلات جزائري ليبي",
    "VOD - مسلسلات يمنية",
    "VOD - مسلسلات أردني فلسطيني",
    "VOD - مسلسلات بدوية",
    "VOD - مسلسلات تركية مترجم",
    "VOD - مسلسلات تركية مدبلج",
    "VOD - مسلسلات روسيه مترجم",
    "VOD - مسلسلات مدبلجة",
    "VOD - مسلسلات أجنبيه فائقة الوضوح",
    "VOD - مسلسلات أجنبيه",
    "VOD - مسلسلات ألمانية",
    "VOD - مسلسلات أسيوية مترجمة",
    "VOD - مسلسلات أسيوية مدبلجة",
    "VOD - مسلسلات هندية مدبلجة",
    "VOD - مسلسلات هندية مترجمة",
    "VOD - مسلسلات ناشيونال جيوغرافيك",
    "VOD - مسلسلات وثائقية مترجمة",
    "VOD - مسلسلات وثائقية مدبلجة",
    "VOD - مسلسلات وثائقيه مغربيه",
    "VOD - مسلسلات انمي فائقة الوضوح",
    "VOD - مسلسلات انمي",
    "VOD - مسلسلات شاهد كيدز",
    "VOD - مسلسلات تود كيدز",
    "VOD - مسلسلات أطفال",
    "VOD - مسلسلات اطفال اسلامية",
    "VOD - مسلسلات كارتون زمان",
    "VOD - مسلسلات أطفال مغربية",
    "VOD - مسلسلات اطفال تونسية",
    "VOD - مسلسلات كرتون للكبار",
    "VOD - مسلسلات قديمه عربيه",
    "VOD - مسلسلات اسلامية"
  ];

  return (
    <Div>

    
          {seriesCategories.map((series, index) => (
            <SpanHover 
              key={index} 
            >
              {series}
            </SpanHover>
          ))}
       
    </Div>
  );
}