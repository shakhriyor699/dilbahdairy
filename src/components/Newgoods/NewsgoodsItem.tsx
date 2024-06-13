import React from 'react'
import s from './Newgoods.module.scss'
import Image from 'next/image'
import { Link } from '@/navigation'

const NewsgoodsItem = ({item}: {item: any}) => {
  return (
    <div className={s.newgoods__item}>
            <div className={s.newgoods__item_img}>
              <Image  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={item.image} alt="" className={s.newgoods__item_image} />
            </div>
            <h2 title={item.title} className={s.newgoods__item_title}>{item.title}</h2>
            <Link href={`/newest/${item.pk}`} className={s.newgoods__item_link}>Подробнее</Link>
    </div>
  )
}

export default NewsgoodsItem