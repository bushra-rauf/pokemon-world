import HomeGridArticle from "@/components/HomeGridArticle";
import { HomeGridArticleType } from "@/utils/types";

const article: HomeGridArticleType[] = [
  {title:'Sunny Days', image:'/pic03.jpg', style: 'primary'},
   {title:'Cute Bugs', image:'/pic02.jpg', style: 'secondary'},
    {title:'Waltzing Pokemon', image:'/pic07.jpg', style: 'tertiary'},
     {title:'Fire + Fighting', image:'/pic06.jpg', style: 'featured'},
      {title:'New Models released', image:'/pic04.jpg', style: 'primary'},
       {title:'Small but Tough', image:'/pic05.jpg', style: 'secondary'}
]
export default function Home() {
  return (
   <div className="home-grid">
       {article.map((item:HomeGridArticleType, index: number) => <HomeGridArticle key= {index} {...item}/>)}
        {/* <HomeGridArticle title='Sunny Days' image='/pic5.jpg' style = 'primary'/> */}
        </div>
  );
}
