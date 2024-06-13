import s from './Partners.module.scss'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { urlImg } from '@/services/api';




const Partners = ({images}: {images: any}) => {
 
  
  const t = useTranslations('Ourpartners');
  
  return (
    <section className={s.partners}>
        <div className="container">
            <div className={s.partners__box}>
                <h2 className={s.partners__box_title}>{t('title')}</h2>
                <div className={s.partners__box_list}>
                  {images.map((img: string, i:number) => (
                    <div className={s.partners__box_list_img}>
                     <Image  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill key={i} src={`${urlImg}${img}`} alt="" className={s.partners__box_list_image} />
                    </div>
                  ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default Partners