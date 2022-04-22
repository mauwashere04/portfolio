import Head from 'next/head'
import styles from '../styles/Project.module.css'
import Image  from "next/dist/client/image";
import { useState } from 'react';
import Modal from '../components/Modal';
import Link from 'next/dist/client/link';

const About = () => {
    const [showModal, setShowModal] = useState(false);
    return ( 
    <>
        <Head>
            <title>Alforque | About</title>
            <meta name='keywords' content='portfolio'/>
        </Head>

        <div>
            <h1 className={styles.pagetitle}>About</h1>

            <div className={styles.mainwrap}>
                <div className={styles.mainwrap1}>
                    <div className={styles.card}>
                        <Image src="/maupic.png" width={300} height={250} />
                        <h1>Antonio Alforque</h1>
                        <p className={styles.title}>IT Student</p>
                        <p>Lithan Academy</p>
                        <div className={styles.icon}>
                            <a href='https://www.linkedin.com/in/antonio-alforque/'><i className="fa fa-linkedin"></i></a>  
                        </div>
                        <p><button className={styles.button} onClick={() => setShowModal(true)}>Contact</button></p>
                        <Modal
                            onClose={() => setShowModal(false)}
                            show={showModal}
                            >
                            <h1>LinkedIn</h1>
                            <Link href="https://www.linkedin.com/in/antonio-alforque/">
                            <a>https://www.linkedin.com/in/antonio-alforque/</a>
                            </Link>
                            
                            <h1>Email</h1>
                            <p>mauricealforque@gmail.com</p>
                            <h1>Phonenumber</h1>
                            <p>(+63) 915 015 7123</p>
                            <h1>Address</h1>
                            <p>Manila, Philippines</p>
                        </Modal>
                    </div>
                </div>

                <div className={styles.mainwrap1}>
                    <div className={styles.mainwrap2}>
                        <div className={styles.flipcard}>
                            <div className={styles.flipcardinner}>
                                <div className={styles.flipcardfront}>
                                <h1 className={styles.cardtitle}>EDUCATION</h1>
                                </div>
                                <div className={styles.flipcardback}>
                                <h1>Grade School</h1> 
                                <p>Don Bosco Technology Center</p> 

                                <h1>High School</h1> 
                                <p>La Salle Green Hills</p>
                                
                                <h1>Higher Education</h1> 
                                <p>Lithan Academy Pvt. Ltd.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.flipcard}>
                            <div className={styles.flipcardinner}>
                                <div className={styles.flipcardfront}>
                                <h1 className={styles.cardtitle}>LANGUAGES</h1>
                                </div>
                                <div className={styles.flipcardback}>
                                <h1>Bisaya/Cebuano</h1> 
                                <p>Native</p> 

                                <h1>Tagalog</h1> 
                                <p>Native</p> 

                                <h1>English</h1> 
                                <p>Full Professional</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mainwrap2}>
                        <div className={styles.flipcard}>
                            <div className={styles.flipcardinner}>
                                <div className={styles.flipcardfront}>
                                <h1 className={styles.cardtitle}>KEY TECHNICAL SKILLS </h1>
                                </div>
                                <div className={styles.flipcardback}>
                                <h1>Language</h1> 
                                <p>Python, JavaScript, HTML, CSS, Java, MySQL</p> 
                                
                                <h1>Framework </h1> 
                                <p>Spring, STRUTS, Next.js, React</p> 

                                <h1>Tools </h1> 
                                <p>IntelliJ, Eclipse IDE, MySQL, Workbench, Spring Tool Suite</p> 
                                </div>
                            </div>
                        </div>

                        <div className={styles.flipcard}>
                            <div className={styles.flipcardinner}>
                                <div className={styles.flipcardfront}>
                                <h1 className={styles.cardtitle}>EXTRACURRICULAR</h1>
                                </div>
                                <div className={styles.flipcardback}>
                                <h1>Sports</h1> 
                                <p>Philippine National Team</p> 
                                <p>GOM Football Club</p>
                                <p>La Salle Green Hills (LSGH) Football Team</p>

                                <h1>School Club</h1> 
                                <p>Katribu</p>
                                <p>Glee Club</p>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>


            </div>
        </div>
    </>
    

     );
}

export default About
;