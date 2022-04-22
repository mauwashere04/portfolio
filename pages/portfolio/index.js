import Head from 'next/head'
import styles from '../../styles/Project.module.css'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Projects = () => {
    const [showModal, setShowModal] = useState(false);

    return (  
        <>
            <Head>
                <title>Alforque | Projects</title>
                <meta name='keywords' content='portfolio'/>
            </Head> 
            <div>
                <h1 className={styles.pagetitle}>Projects</h1>
                   
                <div className={styles.container}>
                    <div className={styles.container1}>
                    <div className={styles.flipcardportfolio}>
                            <div className={styles.flipcardinnerportfolio}>
                                <div className={styles.flipcardfrontportfolio}>
                                <Image src="/battleship.png" width={320} height={300}/>
                                <h1 className={styles.cardtitleportfolio}>Battleship </h1>
                                <p>This game that I created is played against a computer and will take 
                                turns locating the battleship of the enemy until there is none left. 
                                The player who losses all his/her battleships losses the game.</p> 
                                </div>
                                <div className={styles.flipcardbackportfolio}>
                            
                           

                            <h1>Languages</h1> 
                            <p>Java</p> 

                            <h1>IDE</h1> 
                            <p>IntelliJ</p> 
                            
                            <Link href="https://github.com/mauwashere04/battleship">
                                <a className={styles.btn}>Source Code</a>
                            </Link>
                                </div>
                            </div>
                        </div>

                    <div className={styles.flipcardportfolio}>
                            <div className={styles.flipcardinnerportfolio}>
                                <div className={styles.flipcardfrontportfolio}>
                                <Image src="/schoolwebsite.png" width={320} height={300}/>
                                <h1 className={styles.cardtitleportfolio}>School Website </h1>
                                <p>I developed this school website where users 
                                can enroll in the courses that are offered by the school. 
                                Users can also view the teachers, founders, and more information 
                                about the school and its courses. </p> 
                                </div>
                                <div className={styles.flipcardbackportfolio}>
                             
                           

                            <h1>Languages</h1> 
                            <p>HTML</p> 
                            <p>CSS</p> 

                            <h1>IDE</h1> 
                            <p>Visual Studio Code</p> 
                            
                            <Link href="https://github.com/mauwashere04/school_website">
                                <a className={styles.btn}>Source Code</a>
                            </Link>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className={styles.container1}>
                    <div className={styles.flipcardportfolio}>
                            <div className={styles.flipcardinnerportfolio}>
                                <div className={styles.flipcardfrontportfolio}>
                                <Image src="/rolebasedlogin.png" width={320} height={300}/>
                                <h1 className={styles.cardtitleportfolio}>Role-Based Website </h1>
    
                            <p>This project I developed has two users, the admin, and the user. 
                                The users can register to make an account, log in to the platform, 
                                and see their profile. While the admin logins, go to their profile 
                                and manipulate the users of the platform by deleting user accounts 
                                or updating their information. </p> 
                                </div>
                                <div className={styles.flipcardbackportfolio}>
                                

                            <h1>Languages</h1> 
                            <p>HTML</p> 
                            <p>CSS</p> 
                            <p>Java</p> 
                            <p>MySQL</p> 
                            <p>JavaScript</p> 

                            <h1>Framewore</h1> 
                            <p>STRUTS</p>

                            <h1>IDE</h1> 
                            <p>Eclipse</p> 
                            
                            <Link href="https://github.com/mauwashere04/Role-Based-Login">
                                <a className={styles.btn}>Source Code</a>
                            </Link>
                                </div>
                            </div>
                        </div>

                    <div className={styles.flipcardportfolio}>
                            <div className={styles.flipcardinnerportfolio}>
                                <div className={styles.flipcardfrontportfolio}>
                                <Image src="/carportal.png" width={320} height={300}/>
                                <h1 className={styles.cardtitleportfolio}>Car Website </h1>
                             
                            <p>I developed this portal that can be accessed
                                by both admin and users. The users can list their car 
                                in the portal, update their information, and search 
                                for cars that are listed in the portal. The admins can 
                                access the database for all the cars and users within the
                                portal and can delete or update their information. </p> 
                                </div>
                                <div className={styles.flipcardbackportfolio}>
                                
                            <h1>Languages</h1> 
                            <p>HTML</p> 
                            <p>CSS</p> 

                            <h1>IDE</h1> 
                            <p>Visual Studio Code</p> 
                            
                            <Link href="https://github.com/mauwashere04/Car-Portal">
                                <a className={styles.btn}>Source Code</a>
                            </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
}
 
export default Projects;