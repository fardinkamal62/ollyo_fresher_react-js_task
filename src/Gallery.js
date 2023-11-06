import * as React from 'react';
import { useState } from "react";

import ReorderImages from './ReorderImages';
import Bar from './Bar';

export default function Gallery() {
    const [items, setItems] = useState(itemData);

    const toggleSelect = (item) => {
        const title = item.title;
        setItems((prevItems) => {
            const index = prevItems.findIndex((item) => item.title === title);
            const newItems = [...prevItems];
            newItems[index].checked = !newItems[index].checked;
            return newItems;
        });
    };

    const deleteImages = (image) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                if (image && item.title === image.title) {
                    return { ...item, checked: true };
                }
                return item;
            });
            const remainingItems = updatedItems.filter((item) => !item.checked);
            return remainingItems;
        });
    };


    const updateImages = (images) => setItems(() => images);

    const selectAll = (bool) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                return { ...item, checked: bool };
            });
            return updatedItems;
        });
    };


    return (
        <>
            <Bar items={items} deleteImages={deleteImages} selectAll={selectAll}/>
            <ReorderImages images={items} callback={updateImages} toggleSelect={toggleSelect} deleteImages={deleteImages} style={{ margin: '10%', left: '1%', position: 'relative' }} />
        </>
    );
}

const itemData = [
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACEQSE41n-D-fRP-6kU6nzktL0eIYDNVAT17PllNW4YXwzAY_9I7ZvA4E8-MPcTY8dC8p1t9maqrX5c4Uro-Wd57sEC0MILqyzXpE49wGzd7dyOh3a5ZEls8vxBjgl4avD4L3K1tGkoLO0oInLl6MnrEGG-bXow0yfv39KNRm4u9knmbM45UZhBu3b7VErP1e0SurPlNiqb1WD89g-SwyVoZUSzUjjv7y8d8umU-JZ6c0oObpsAjLtZ0lwf_EhrR3UYqi24SKcqfamUlKeCYoZLjrlLIcM_auwBtdTFl9DRTUgjKizIaD_1AM3YcbFeNOab_SW34k24GD-CwyfZLFWjVisfxb27yjUY1uC2m4Yc6RAGLUrc0KFLdxhSyKj8Xliwb-5f8oUGRMlO-iSlLCeTDNRHeHSdm35_rMsA7UaaD8JlHzbY7VdExh5Uq2-PG0vtEhX2R1649bkfTGFKsyHQSdFoTSBoLlap23DH2xIWXjCXdeJ4uJsdIJzUzDcLKG3VzIn9Sv9G6HtS-ktgtFf6Q6UdoWBklFJieNuOMuxgH2zCL270RW6YHFa5o3-6dADyu0b__q7ZzsJB-3OsaNOUy2X73Atoit0afD6lKOhJBM-xuZ274NNTyFAef_c03h5i8ARrouYNoc6nXhoVuofr-Yf6_N0jCSs7WAwS-KmwY6tL1VTp122jNwOEK1atbK3iVy_8qbKWAN8Dn2JRGXg1j161ssLz8tpJcMWKva5dGgO30Su_tdtg7L0AadckqPICWHL5IIyU4iRkRqL5IWwUV-gaBdcwYBB1sIFvIRxvUOA/p.png',
        title: 'Blue Headphone',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACEnj5Blgc95v_X0qBwDnfoqvlCSwQdx8HHL5YcLJhmMSO5MNoB1uYUsWAd4nvWk9sTNEb6UFp9vEAN0SuxM04kGxwhJa0EidJYAPIyw4X1FQKuyKf1p3XlG9R-VQ-pk-F96iZBhIxj0dyPTRNVL2Zp_ZJVy8WLW-kJLdc0ezSgwX1lyh38b3uDw8frOKkDrkWo5KYbUO9ISyX5T7dP2b4U1dC8ShoZEj6ZOGxKcM16CrjGxbroNOiuGkXBRqvbmi3m6WsX6rYm4O4w8pwEoHe4ft2q5gXVVg2ZMfCskbiGQUm-u0wFLWfAGNsyg5ogchszPNLlBPqiJYmI5Tx1oFW4PUPB1yxUGLtLMvj6Xva_FI0AbrnN_dI-_YArn0GzUfEDvekwsFQExQqAxL1xyy7FfMfNsav-9yQX0JqXmmoaligHahBXkP8otU2IxPbAAIovIVKtl8yq-BO3Vako2Jh8OZJIE7fMeN1nAypgOfl-YQeTy7GNZK-vS_TOhr7WIOZSXmePGUNjZ46zmlBBd7V1ngAurcQAOxumTANun61VPMbXRSjC5sU1MPbe_cLUdtIh4N9-TfJOMyKdssEvjSCv9OvfF4NjL0gEG_EqtxgWNBe8ey0OXQvCo19A1jhZ54msnYNGlrMzGg-DVEfUAgdLuKI33kZULVqYwD-zNTSFQX3l13ohokmievy_bKBKJe49idyhVPWEdZ02QDNpW2dQkDT4_O7ht-HLLtVgD58GFTjfTXx4uOAPmYtiT4Y0xFxJWnZO2WQR3JwvmnQHS6cpM4rjWCPLChziyFx42e3S8mw/p.png',
        title: 'Green Headphone',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACE03dZCifwChPHmsv51cgT5Cf3KxNhEaiHGrdNxElZ6ZM-HHHQSALWI8InBHsMidXNmIJ4ioEJnR6q8h9WPix-lQTtCkqgk874Y4726ChceFz0MR59tw-3KTzI4_2_-0fxDUfXB1YUR3c255uprauWTGU9I6lhE81KWfEgt9pUlXlgfO2ORavS3DygeZyJb1uuYLkSDzJi9pRWtrCF7CoMOEETxDYzS4RiJou9u8w830xd2R3WiN-ANiAyqj7LfF9sg1_72nCDIv4jG5Yq2DSoYcLTsQXTuT2xuS1ea0jCJUY61M-QvVN42HQ52azYN9uLC2RwptsnOXJw_YoxLnQSwar-_Ii88k6P53iOF3Me-OoJ35rNuE8jSs01KnFg8FnGvOom9yQhUaCjx9KXYD1vZMilfwPWB7POBJMtKRDy9lpEe3pcNyUh10PrnBptCIRpBEhhz8xNOpvAFCDH-WJ8gbH4VE1GS_vF1yAS0ymn_anBTMlcPBcAF9yCyKgGUBZ2B44qGUbknzLFuybQCYQe2mHTNo3Tso2eJTtuRR0sDolL3EbJLNhiKcH8QxAc_5RLI5oYfmRlJeMGOIPqXGUncNQRSel-4N95lIoK9TQ7hSokrbCKXzicTwkQ0km22xRccxtJ_nVKyOcF3xEiMB49YNB_aWAnNSJloJIK3WkjwEtOjMyc4hfLpnvgExFvHcg1jVSqqZeBLvOICrMs6QigblcsZGGteWi1NC4ESmUz9ovkolScHjwssJKla9e86WmZyokYqzI7hNWpjFn0Z7MWg9cevm7bXEhP4YdQOw60oJQ/p.png',
        title: 'Pink Headphone',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACHOgkcJU1yIgUMsXtHt1ZCbR_rlrZLwZ4JPKwV8U0T-AFel4YzhdLlHvnh4HPj58PH6flpw54jOMhGw3wkiFoda-3pQxSFs7JU1OWwHzpZ3bTLjk4ElmG1fV-yMJBlVcU8MKf9I35AzMtl-Zhef4Vfd8zqIC7imHzCLcrWEXCINMjmnfw7huqksejvNDFdAdEFV9-nkhcx_fEaDqEfblCpvr4X5EUTZbaJ6eU9AYeARYyLuRo4pvmoccaQbsyR5u2pWF3DZhZHqYCEO4pczZdNQKrjbuYHtRmxpefDyGOWhrMbI2xLWvZ85UztFXVicmae4TVGy4R43Kf868DrDoSR41494XaoKuCzVoMDMZA2FYsPHO2uo_CNQ82MoUeLPuN2osa82C5ERYKS-UivivpWLGDuJPR2SukOnv7MJmyVB5ZFL2x5jHV0MnRFWou-ESvfF2StQjeCIMpJiA3uJTEHz-YOzEvLLriNuc2i6BZaW5eOiqK8P7jiE17UZLNT0ZScwLAyTo-q7WQveCJkxxSTR0o8nqBVU9ch7Hz5n8ZiESl5Tk5q1GQfGVu4F5r0Nps59Gs5yTdI1-Z78Qz0l2GDuNj_m62TbFGvPSnIaHqxSe8CsgGxqVlKUoYQWnvgebrriTNPBn8TVZyvmQN0XOpPT9PPTG9SoG9IwLxpkflE5Sgj7Hnd4Zw0dtqtol0rB3ZCTrK0IQIAlxV9S9BDa_1ua8Y4-utm4ZS3LfUU6ldTsdTP_dEwYJeu6RVx95jTrZEEQgG43lh2Y2s9ZTFFIs2y1YaDU8x0_Vi5cSnAWLT_xfA/p.png',
        title: 'Red Headphone',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACEtNhkk_fmORzhyqwmfnoCe2tvUBww2zvde6p3pmp0TXrev4fHju8XBd_m8_-8qsctStgjIJdHUifqIz-OdiYdP47zjsnxtGzyHX9a_0l1gTu8ZU4XgFJs7F_ep2vz132vlgwPovlKFCpgIczB_x5M4sxhWNA3bcPmcv1dZrnLIJTVHQEepM71HIHSMqMFfIjHN_dtsH3wxgBlJ0iep_pIrLGEo8tSY7tsTZ7kMoZWA9gnR9jk20vUZhiNSNQLsGrp-OKCx0dcDV2MTV6WqmrtWQcIsssfmr-G3fr3qKJo9tLgcj8zHR8F9kEp-odaUqfY9lGE9XUufRVAQxJ5v959B2k6p8AiR7d8AVt-GHVBEdZ_SI1CCYKftQloJ9gDnqz7rFCkjqgCaKTeXkR5fbD11moYyY-7TmP6c9AwPBqLkhx2VhtF867EH7P5Ym0uNAA0dUJ20QSnqsWeAVBG7fQaKD_9i9yEA-IT-jd8jEEMjIDrVEtrKGBkVUtIa_VvonhvYyH4zaUgbn88W3s3YMf4gjIP7-Yw7gzIDQFUstOzI_N3hx5q_bLsLH4CsI5ENQ-xZ5jlSWCO2kMLmvcOiCPZSyvAm0bIpMV36_tE30TcF7jFKXy-gd_ThTBH3ndYPhFdOBQdqmF_R9bNfH9cU1U4HkxHIo6VuHn7e7x6H0jVGXBYNzv5ecQySeDlw-dYPMwi5EM1Z0vkWCmdBmQ5tKwvU9sNOVgs1Yk9gmkxlsEakx-GLvSEL_trfam7JzgS5sGaYmjglUGSLhnsiuQzgK9S3M_qyGaJky-_VZuRCm8y2_g/p.png',
        title: 'Yellow Headphone',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACE1aK_MPs_ThTkfFGWGBlxiAh0c62HJUwUqOiX203m2uQK3GSd1XVIvlMyynBap6hCaA5tw5bHQREfjIp2QvgCjgta783idCauqrBfYtNJl8l1QKjnRyf_2V3Q-ApCnmuF2xvWTlsyu_UgOacm_y3-qpQyWoQ3SqpsgzMtbmY_om4kh8qJeVOpmfCMavzZD6KsBFgK8sLWI_TSeLo2hmoyR39NhuLSP1p5g6DbKZjkIjR3nnEwUeikkb73HAzHNaBrOtQBOzAf41EgXFfG2jRivimnrFVPhlIumH5t8snpqS59Aw5K1nznKJxmUrAZdDOq5LTybnrBqoZPJTwneacXts2ZfYv2cZfbXi478fAQOv-AoGC8yM0-rSh09VGUVByrlIa4ycN5P6TNShK9RCgPhN9AEdwBVnfdk7EM1wTnORrayOp3UvNGTKe2t8cPV-TGM5sqZLGZ2F70_zXmxNP4hlaAhAp3Zt0lk2vogKps8AlstGhwenDnvi49b-020ZRCMfqBOTQ7Cwk_5WMl-Y5VaCVphewN0qqchwH6aQzs0hXIKBkK9rDU19OnAchJNeMsZbrzs5Hgh5ZtLZI6Li8rCy42gXaChmfJOadpkJoswt0RPUhsPbAVrJKEqsYZkIhZPPglkAuvykIOGrhtnYBM1tnVOoLjsvv9vd_KwSADxwH7Bh9c2aPHJ3nqqrAvpz7qKfwvSQq4UTefp2X77aljXtTVWxcON4wzJblcAWNDcbO_3p8Ovgp2swh0H9zvRn7lACP6sTMunwmiO1aZKqmRbjV9q8u_elvpT6Ozh7gyhYQ/p.png',
        title: 'B&W Headphone',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACHPvK6jpfVFddYDKATDhIHoFYQaeAf71I23gLmsBHgOnM4NqevNdBOp6K3LJzSQuaogCVQDbZR6R0RglrUHRg0Wd_5mXjLmabVKX7fp5CJ5nb0l2UbOHx8WtsOPX2nDjHFVtnGIGtLDX70zjRgst3AvJOTJ711loU7_4otD7IeVzwQa4ylqLM6b9xKxuzSkgjUO0Hi07NKK1J_-UgbT3g7KgdOFlZA6C7HzUsj87y6KyflrML0ZR597zwRrcgkAaQE1KWKhjjKTN3kFllB_GeYdaq17wDfMkFMNKNkxi4uCJ7PvO-vU3Md26snz07WRQIRvYfprpF8QJdlu1H81-o9c6UaiN0o63AiOC1lcCMBQxKKAhYvcVT0M0Ez4FhnIrRo2qbdqjw3uXylUO517JPQk0jP9ysk1PYaLh5Dk4fVzNODIXl_uA882iik0qcZeIYDaGZe0t7rlcslB5kGaLsIuh5JyRbxE4lBSOpAEqAQzzrVKl06h1xYjTpE4ydzAblfKKFYHebq3lXYtl04DJHuAqF1QkRaiwXnJao9CZzsYHssf0El8PyTZptYCKmie-BCHSKeTAxc96LrN0Vv8qn7HuPFktbjx-7H2grQp2H7P9NvfjeyyODiPlLdXULGc2GIyNX-XQykPvvfGNdmth-M9ry1bTRKyg9j40YCY12YfFSu2S6aZ6MOZMbN2i0JRAW8O0L0-svNi9z--QKLAzRgghwGiJdY_e55T262EAjpbikKKFfiXS7CgLlDhJ9M430D0FBQxJRz7AEAVYg92ZChuOJrjpzpHEi29dlIzeILH9g/p.png',
        title: 'Grey Apple Watch',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACEtin-uSSmPMFTkb5S-anKX8XSDlBodGMD1F-j91gSgDoOz6tv9_Eese636mrGHJgGgWJazzRA9VNe5hh3Jkp9s31PZwllqfT977Lqc2nj61uLmLFo9Q6ZGDZhzW5u-lrLIBUG0lvwVx6QugG8rXI8EkYnxcZMU54VDQtCLbB0lDXV2Jr1VmvRtS0g0s9zjRp28j2-fBbv2gtoKjE1HbZgxCq1TfDLXRGnFWOFEjlFTFqSFSgUYrJ0xcTXeHc_OoutxXxGs5uHHk_rCkrf4aqLHybiLiSFGIVSPDIxJ8E12A4Unx-5Vs51HfFPKtN1cGlXLDyDKncay_Pdxrdh4mfNL1QgS1l7I1dYW48T3XXmZVvOBfNPecZaTpmBPfkIh73GM2MdDLSprTqo6wkppI-9EHdgd0-z39Seo_-CAnvE32EGzuAjIOL8RoKgV1uTMx_sgZtvFTEwXD7sKUJjvtE4hzt8jtPxLNtab9imxeO6kuiyD3sJuuR6ETHQaY-k7LpOhKLp115TQwCLlVVYPN8MHKtQ1vojvQdi1d7Edq6IRVW56hBmtxyoSDCaPSW1LWKMt5D9Mf74sIF2X6dshsMlWQ9CLJFD_ATqQwxwUFWbtz1OAWoWjtVa6kidQAjY0fyutfKNLbbAdkUtO97Ieme35gkEZj_ALzT7SDDZD0yb2_LBsl1JEemxbcSoL30ik4t0JAqlqiJmfJGqiuhKiCxMVnvI25A2HKHq_NZ5EKoqmn2SH8H3UwE3ssfJelrFw_JQ0TWeqEb2iXLqTQUO7IK8O2wj-isDVgn-m9zMWELdF9Q/p.png',
        title: 'Orange Apple Watch',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACG4V0xR_xCZC01euLvv4t42Lsvweie7VBGKvallPXkomArAT1ZKnGVoAQSHtVxrx6L-aWB7eAHxspfZKdmmJX8OPWKo1y40y0gmatUmtAJygKRw1i2WBIlGJ1iZtTxi3eLMJ5Et8TwU9fUjnZw4KSVTr06RyYsGknJ47626m6j_HiPeUh-Owe0SfY4p6nqIiK2Fi0GXqmPRlqC0bW0Jwy7ZleGhxq0z3FMVoVoJbXEanrSmUCykrHHeglkABAUVkeYsIR8E_-pKPl-dWo65FOQag13yhMmrTqM0xu2OBle7Vf4cYcrk261oqTFXb1HVvs4aEh4qI5y9sNd5GFHS-NpiazxcAbPzRztu40nNzj7wrgX92vDhk9nMUMoD8xTbvYGyjSrFpLaIoK6-XzCqOJKI5PuSbtJBFYlL-VStLon1-DRe0sQ65T1QVKSm_I2H8U3WLGqZ-7RKSq_hwL8OuWrMWd9Z25kynmuwyo0BMSPVPGloSHHLpyjkA8KvLOKFwKWqTpZKnxwVSD53VFOZGuikWovz1Rei0-6HxzGsJSlMaRZ_YOovwNm01y_JRuCjYZ_z3qEYSsDvuCXammmWVjnxdYy-rJHIBJz0-qw417C01atu7HvEbVdjGmANigYv0rRXxrPPXXEHKsuqIROdarIZc-StdO4EHIBG5gq6jaQVSwawjd96S3b2EP7-5kUpBLIAoD8F9Q4tTnExhM0Um9UflycfpM7xxyGp7o9pGT5mXl3dxiC16aOyiLyqtcX8D557uqEFGb8wI1G4DDWN-HrDRTAlmYliYDegtXnY0LmpJw/p.png',
        title: 'Blue Apple Watch',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACGUwtpWeZmJbcCqptWiSCuY3hxjMvqetRhD84rcXqAz2o5SY1M55hx3kbM_UV83Zy-ywNSaVqzCDBKRo146TT765FvOB6pIAXuVdy5fMrJUjIOshp-_NeMX-8FTc2qCYhrA1pUmJgA8nZIcVJ-IJGKfxQqzkQNXieWpJLJOBlVkZFMdUw3MMdEY3PSXFZu3f_8YiYeOf4VKq_Yt32KJEl0v07xUXl2213MaGV4QvAtd00P_y9aqbyNWI75Wn5aVq3GQEpoKpgIXqCTlH2SisumhoRojJgLOiIskYPcbja_EP8VTjmME_bragb7cxdq-Li-admTh3ytsT35LHnyzoYgaDtfH9o6y5cHUK3t9syR-WSxPIauGuO6Yhd6GNVFK4n4Kh76JNZszBNHuO1f83vanKm9_hPcz__IGxFxghx-rexUn2KaFxdeeHP7Ovv8DZfBa3FGEPHhhXMsRusXkrIYet07xEgvadwbIjczrX6OdDqo1nrUxqzPCWCbeG2ODDfrtP-H1jOyTbF3xZE8wjpwfO20sCuJ7yt9iDTJt2wKk0BD_t2fIg4Wk9HrfiDdbPv4nLbbSbkj0nqN6g3NRnCYit7KHIgvqRgM3_GCUELGzDmXXVDl1CT2RAnksK3xhQE8DEiG9bkDa7WLjPaO8ATEpIFaHzDPKwUN99amu688mlMTSxuyfYguqJXGhPOKbU1zs401TV3RBknu8QeJJ57x8S9I5bzGNChs89wnWdwYdy1wV6dmgeZ-QluqLQoGTSVnfS2PBva57urNrqnwEAR5uBgh-u7V0w9LAOu9QrPMA_qiYOdPUfO7P5wGdPzt92uk/p.jpeg',
        title: 'Red House & a cycle',
    },
    {
        img: 'https://uc2a24300a48bdce20f246eae457.previews.dropboxusercontent.com/p/thumb/ACH0rRmqB9_0c3sFsw6ZmKdw_XN1N0XOWq9h0GD4_sdMhcPQwF9KqBciKVNjXreX-BdLZC4YtZwQLCYGEMGPAwXIy29D7ryYBIdEmoa95IxUu1lorXIYx8uPDa_o8sqS8Jqy5Eo52fTPC_bDg8QwOilnWCTiYCqfWuE7FCeo7o2p6d3eNvLC6vfbNt4-0_DhnmE46pbwrVwCIAfH6BUJsmXGv-eHoVhQUvUAlVYxPdZS-_6Fd0HFwAaS3lNRvexKnlkHlhX46pMyRnu4qmT5Bjqct_AFgGMfeVP2ZFpfUmHFaSv4vSQlM9Kpb5JuBe_UYNboGW2pXyhM96Dmb-qk82NdVIFd6clc2-mlYDAvDPNhuh5ozgVEASsiNsj3JXRzr1pUYKfWrznrS9BSabCBlxPOYWWGCnu0_ZuxugBYMhgiU8xXZ-rLeyIMwzGS0Vac4odQ78XLsip-bQo8BW3fhEf-DQdODgSfbPaRlpYtgy_2iHEZuOJAWkuNjDSW2ZBnYxZ9usP0BWx-2KsTnASa85sWoE1hek1NP0sCQT2rWav3lBpnzQw5iZD2LzgDZYxpWOjpfwo7WkP8iNY2K7wtBhhGKnx02Vu9yzZDP9QJorDz3Sejt0LLNIheZ_EXkK8bHC1bR44m7dDZccytzuFeFrNbPdtxSClImauqSgCX4VU2bE4RcPvYNWB1w1CYQRSGeLUeZcj8JZjYlEeP2pL6ZyMoVkDk0MN7Zka0dcoTJG7o20hd9Fo9iHg_nCP6DegGCWh4e4CkuBVgs0oSbOuJ1gX6M_lkfrmKdnOwQFhU3n7zVenQH0R2w9-PLvztgqiADm0/p.jpeg',
        title: 'Yellow Telephone',
    }
];
