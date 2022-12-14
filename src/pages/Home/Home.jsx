import styles from './home.module.css'
import fotoPerfil from '../../components/img/anabeatriz.jpeg'  // importando a imagem p/ ser chamada como variável lá embaixo - aí dá certo p/ fazer o deploy
/* import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"; */



function Home(){
    return(
        <>
            <div className={styles.about}>
                <img src={fotoPerfil} alt="foto do arquivo pessoal de AnaB Santos" />
                <div className={styles.text}>
                    <h1>Ana Beatriz dos Santos</h1>
                    <h3>Desenvolvedora Full Stack</h3>
                    <p>Entusiasta das relações entre tecnologia, raça e gênero.</p>
                </div>
            </div>
        </>
    )
}

export default Home

/*
    <div className='media'>
        <a href="https://mailto:anabia200113@gmail.com" class="fa fa-envelope" target="_blank"></a> 
        <a href="https://www.linkedin.com/in/ana-beatriz-santos-2a8133220/" target="_blank" class="devicon-linkedin-plain"></a>
        <a href="https://github.com/anabiax" class="devicon-github-original" target="_blank"></a> 
                    
        <div class="about__buttons">
            <a download="" href="https://docs.google.com/document/d/14gTbTBdP_u4jKfejfNLiB9vfnsInhh-a/edit?usp=sharing&ouid=109003243932731513599&rtpof=true&sd=true" class="button button--flex">
                Download CV<i class="uil uil-download-alt button__icon"></i>
            </a>
        </div>
    </div>
*/