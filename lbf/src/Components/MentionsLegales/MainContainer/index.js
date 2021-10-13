// Import styles
import "./styles.scss"
import { Link } from "react-router-dom"

function MentionsContainer(){
    return(
        <div className="mentionsContainer__container" >
            <div className="mentionsContainer__container-bloc">

                <div className="mentionsContainer__container-button">
                    <Link to="/"> <button className="errorContainer__container-errorButton">Flemme ? </button></Link>
                </div>

                <div className="mentionsContainer__container-bloc-title">
                    <h1>Mentions legales</h1>
                </div>

                <div className="mentionsContainer__container-bloc-text">
                    <h3 className="mentionsContainer__container-bloc-sectionTitle" >Éditeurs du Site :</h3>
                            L’édition et la direction de la publication du site
                            https://letsbefriends.netlify.app est assurée par ELISA Mathieu, MAURICE Julien,
                            MARIEN Robin, ESPITALIER Jordan et MARTIN Emmanuel.
                        

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Hébergement :</h3>
                            Hébergeur : NETLIFY
                            2325 3RD STREET,SUITE 215, SAN FRANCISCO, CA 94107 USA.

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Conditions d’utilisation :</h3>
                            Ce site (letsbefriends.netlify.app) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable.
                            Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…
                            Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de l'equipe de LETS BE FRIENDS ,
                            et signaler toutes modifications du site qu’il jugerait utile. Lets be Friends n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Cookies :</h3>
                            Le site letsbefriends.netlify.app peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. 
                            Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                            Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. 
                            Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Liens hypertextes :</h3>
                            Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. LETS BE FRIENDS ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet.
                            Lets be Friends ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, 
                            résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. 
                            Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.
                            Les utilisateurs, les abonnés et les visiteurs des sites internet  ne peuvent pas mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de LETS BE FRIENDS.
                            Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet letsbefriends.netlify.app, il lui appartiendra d’adresser un email accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien.
                            LETS BE FRIENDS se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Services fournis :</h3>
                            L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre site letsbefriends.netlify.app.
                            LETS BE FRIENDS s’efforce de fournir sur le site letsbefriends.netlify.app des informations aussi précises que possible. 
                            Les renseignements figurant sur le site letsbefriends.netlify.app ne sont pas exhaustifs et les photos non contractuelles.
                            Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. 
                            Par ailleurs, tous les informations indiquées sur le site letsbefriends.netlify.app. sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.

                            
                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Limitation contractuelles sur les données :</h3>
                            Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions.
                            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par courriel, à l’adresse contact@anthedesign.fr, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, …).
                            Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement.
                            De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
                            Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de LETS BE FRIENDS.

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Propriété intellectuelle :</h3>
                            Tout le contenu du présent site letsbefriends.netlify.app, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme 
                            sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.
                            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                            même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de LETS BE FRIENDS. Cette représentation ou reproduction, par quelque procédé que ce soit, 
                            constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Déclaration à la CNIL :</h3>
                            Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l’égard des traitements de données à caractère personnel) 
                            relative à l’informatique, aux fichiers et aux libertés, ce site a fait l’objet d’une déclaration 1656629 auprès de la Commission nationale de l’informatique et des libertés (www.cnil.fr).

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Litiges :</h3>
                            Les présentes conditions du site letsbefriends.netlify.app sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de 
                            l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. 
                            La langue de référence, pour le règlement de contentieux éventuels, est le français.

                        <h3 className="mentionsContainer__container-bloc-sectionTitle">Données personnnelles :</h3>
                            De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet letsbefriends.netlify.app
                            Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre fonction, le nom de votre société, votre adresse électronique, et votre numéro de téléphone. Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « contact ».
                            Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur notre société, ou de recevoir les lettres d’information.
                            Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors d’une simple navigation sur notre site internet, notamment : des informations concernant l’utilisation de notre site, comme les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos temps d’accès.
                            De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière à améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
                </div>

            </div>
        </div>
    )
}

export default MentionsContainer