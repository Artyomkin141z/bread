'use client'

import { useState } from 'react';
import styles from '../../styles/components/global/feedback.module.scss';
import host from '../../utils/data.client.request'

export default function Feedback() {
    const [showMadal, setShowMadal] = useState(false);

    

    return (
        <>
            <div className={styles.button}
                onClick={() => setShowMadal(true)}
            >
                Связаться с нами
            </div>
            {showMadal && <div className={styles.madal} id='madal'
                onClick={() => setShowMadal(false)}
            >
                <div className={styles.container}
                    onClick={(e) => e.stopPropagation()}
                >
                    <header>
                        <h2>🚀 Обратная связь</h2>
                        <p>Благодаря Вашим отзывам мы будем становиться лучше.</p>
                    </header>
                    
                    <form method="post" action={`${host}/api/feedbacks`}>
                        <div className={styles.flex}>
                            <label>
                                <div>Имя</div>
                                <input name="name" />
                            </label>
                            <label>
                                <div>Фамилия</div>
                                <input name="surname" />
                            </label>
                            <label>
                                <div>Отчество</div>
                                <input name="lastname" />
                            </label>
                        </div>
                        <label>
                            <div>Email</div>
                            <input name="email" />
                        </label>
                        <label>
                            <div>Ваш номер телефона</div>
                            <input name="phone" />
                        </label>
                        <label>
                            <div>Ваш отзыв</div>
                            <textarea name="comment" />
                        </label>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>}
        </>
    )
}