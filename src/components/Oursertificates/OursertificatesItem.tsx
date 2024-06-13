import React from 'react'
import s from './Oursertificates.module.scss'
import Image from 'next/image'

const OursertificatesItem = ({el}: {el: any}) => {
  return (
    <div className={s.oursertificates__box_item}>
      <div className={s.oursertificates__box_item_img}>
        <Image  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={el.image} alt="" className={s.oursertificates__box_item_image}/>
      </div>
    </div>
  )
}

export default OursertificatesItem