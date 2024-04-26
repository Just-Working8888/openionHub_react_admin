import { FC } from "react";
import classes from './NewsBlock.module.scss'
import img1 from './img/Group1.png';
import img2 from './img/Group2.png';
import img3 from './img/Group3.png';
import leftIcon from './img/arrowLeft.svg';
import rightIcon from './img/arrowRight.svg';

const NewsBlock: FC = () => {

    return (
        <div className={classes.news}>
            <h1 className={classes.news_title}>Что нового</h1>
            <div className={classes.news_row}>
                <div className={classes.news_smallItem}>
                    <h2 className={classes.news_smallItem_title}>Скидки на
                        BigBee </h2>
                    <img src={img1} alt="" />
                </div>
                <div className={classes.news_smallItem}>
                    <h2 className={classes.news_smallItem_title}>В плюсе
                        останутся
                        все</h2>
                    <img src={img2} alt="" />
                </div>
            </div>

            <div className={classes.news_bigItem}>
                <div className={classes.news_bigItem_top}>
                    <h2 className={classes.news_bigItem_title}>В плюсе
                        останутся все</h2>
                    <p className={classes.news_bigItem_text}>В Кыргызской Республике существуют
                        общий налоговый режим и специальные
                        налоговые режимы. Общим налоговым
                        режимом является систем</p>
                </div>

                <div className={classes.news_bigItem_bottom}>
                    <button className={classes.news_bigItem_bottom_btn}><img src={leftIcon} alt="" /></button>
                    <button className={classes.news_bigItem_bottom_btn}><img src={rightIcon} alt="" /></button>
                </div>
                <img className={classes.news_bigItem_img} src={img3} alt="" />
            </div>
        </div>
    )
}

export default NewsBlock;
