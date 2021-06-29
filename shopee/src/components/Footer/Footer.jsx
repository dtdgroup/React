import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './footer.style'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const changeLanguage = lng => i18n.changeLanguage(lng)

  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>© 2021 Shopee. Tất cả các quyền được bảo lưu</div>
          <S.Language>
            {t('footer.language')}:
            <span
              onClick={() => changeLanguage('en')}
              className={classNames({ active: i18n.language === 'en' })}
            >
              Tiếng Anh
            </span>
            <span
              onClick={() => changeLanguage('vi')}
              className={classNames({ active: i18n.language === 'vi' })}
            >
              Tiếng Việt
            </span>
          </S.Language>
        </S.Footer1>
        <S.Footer2>
          <div>Công ty TNHH Shopee</div>
          <div>
            Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai,
            phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 19001221 -
            Email: cskh@hotro.shopee.vn
          </div>
          <div>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
            lần đầu ngày 10/02/2015
          </div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </S.Footer2>
      </div>
    </S.Footer>
  )
}
