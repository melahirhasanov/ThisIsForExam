import styles from "./Header.module.css"

function Header(){

    return(
        <>
        <header>
            <div className={styles.container}>
            <div className={styles.Navbar1}>

            <ul><i className="fa-solid fa-magnifying-glass"><input className={styles.NavbarSearc} type="text" placeholder="Search"></input></i></ul>
            <ul><a href="#"><button className={styles.NavbarButton}>SHOPPERS</button></a></ul>
            <ul className={styles.ulIcon}><li ><a className={styles.navIconATag} href="#"><i className="fa-solid fa-user" id={styles.iconNavbar}></i></a></li>
            <li><a className={styles.navIconATag} href="#"><i className="fa-regular fa-heart" id={styles.iconNavbar}></i></a></li>
            <li><a className={styles.navIconATag} href="#"><i className="fa-solid fa-cart-shopping" id={styles.iconNavbar}></i></a></li></ul>

            </div></div><hr/>
            <nav>
                <div className={styles.container2}>
                <ul className={styles.Nav2}>
                <li><a href="#" className={styles.listNav2}>Home</a>
                </li>
                <li><a href="#" className={styles.listNav2}>About</a></li>
                <li><a href="#" className={styles.listNav2}>Shop</a></li>
                <li><a href="#" className={styles.listNav2}>CATALOGUE</a></li>
                <li><a href="#" className={styles.listNav2}>NEW&ARRIVELS</a></li>
                <li><a href="#" className={styles.listNav2}>CONTACT</a></li>
                </ul>
                </div>
            </nav>
                
        </header>

        <section>
        <div className={styles.heroSection}>
        <img
          src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" // Şəkil linkini burada dəyişə bilərsən
          alt="Shoes"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1>
            Finding Your <span className={styles.highlight}>Perfect Shoes</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
          <button className={styles.shopNow}>Shop Now</button>
        </div>
      </div>
            
        </section>
        
        </>
    )
}

export default Header 