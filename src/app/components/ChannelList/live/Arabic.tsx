import Div from "../../HtmlTools/Div";
import SpanHover from "../../HtmlTools/SpanHover";


export default function Arabic() {
  // 1. مصفوفة القنوات العربية - بقيت كما هي لأنها منظمة جداً
  const arabicChannels = [
    "MBC", "LEBANON", "SYRIA", "MOROCCO", "OSN PLATINUM", "OSN F", 
    "OSN BE", "GOBX PLATINUM", "GOBX BE", "MYHD F", "ROTANA & ART", 
    "EGYPT", "ALWAN ENTERTAINMENT", "WEYYAK", "SHOOF DRAMA", 
    "SHOOF COMEDY", "ON DEMAND", "NETFLIX", "NETFLIX GERMANY", 
    "BOX OFFICE", "SHAHID VIP", "SHAHID CINEMA", "EMIRATES", "IRAQ", 
    "AL-MAJD", "AL-MAJD BE", "SAUDI", "KUWAIT", "QATAR", "OMAN", 
    "BAHRAIN", "JORDAN", "PALESTINE", "TUNISIA", "ALGERIA", "YEMEN", 
    "LIBYA", "SUDAN"
  ];

  return (
    <Div>
     
      

        
          {arabicChannels.map((channel, index) => (
            <SpanHover
              key={index} 
            >
              {channel}
            </SpanHover>
          ))}
     
    </Div>
  );
}