/* =====================================
   CSE BLAGA - DESIGN GENERAL
   Culori: Albastru + Verde
===================================== */

:root {
    --primary: #2677ef;
    --primary-dark: #1554bd;

    --secondary: #19a875;
    --secondary-light: #65d6a5;

    --dark: #102c50;
    --text: #172b4d;
    --muted: #718096;

    --background: #f4f8ff;
    --white: #ffffff;
}

/* RESET GENERAL */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
}

/* =====================================
   HEADER
===================================== */

.header {
    width: 100%;
    min-height: 75px;
    padding: 15px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--white);
    box-shadow: 0 3px 15px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--dark);
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1px;
}

.logo-icon {
    background: linear-gradient(
        135deg,
        var(--primary),
        var(--secondary)
    );
    color: white;
    padding: 8px 12px;
    border-radius: 10px;
}

.navigation {
    display: flex;
    gap: 25px;
}

.navigation a {
    color: var(--text);
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.navigation a:hover {
    color: var(--secondary);
}

/* =====================================
   HERO - PAGINA PRINCIPALA
===================================== */

.hero {
    min-height: 520px;
    padding: 100px 10%;
    display: flex;
    align-items: center;
    color: white;

    background:
        radial-gradient(
            circle at 85% 20%,
            rgba(25, 168, 117, 0.65),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #102c50,
            #1554bd,
            #19a875
        );
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 750px;
    animation: appear 1s ease;
}

.hero-label {
    color: var(--secondary-light);
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 2px;
}

.hero h1 {
    font-size: clamp(38px, 6vw, 65px);
    line-height: 1.15;
    margin: 20px 0;
}

.hero h1 span {
    display: block;
    color: var(--secondary-light);
}

.hero p {
    color: #d1def2;
    font-size: 18px;
    max-width: 600px;
    margin-bottom: 30px;
}

/* =====================================
   BUTOANE
===================================== */

.primary-button {
    display: inline-block;
    border: none;
    border-radius: 10px;
    padding: 14px 25px;

    background: linear-gradient(
        135deg,
        var(--primary),
        var(--secondary)
    );

    color: white;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
}

.primary-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 22px rgba(25,168,117,0.3);
    filter: brightness(1.08);
}

/* =====================================
   SECTIUNEA FEATURES
===================================== */

.features {
    padding: 85px 8%;
}

.section-heading {
    text-align: center;
    max-width: 650px;
    margin: 0 auto 45px;
}

.section-heading span,
.auth-heading span {
    color: var(--secondary);
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 2px;
}

.section-heading h2,
.auth-heading h2 {
    font-size: 32px;
    margin: 10px 0;
}

.section-heading p,
.auth-heading p {
    color: var(--muted);
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.feature-card {
    background: white;
    padding: 30px;
    border-radius: 16px;
    border-top: 4px solid var(--primary);
    box-shadow: 0 5px 20px rgba(0,0,0,0.04);
    transition: 0.3s;
}

.feature-card:nth-child(2) {
    border-top-color: var(--secondary);
}

.feature-card:nth-child(3) {
    border-top-color: var(--primary);
}

.feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(38,119,239,0.12);
}

.feature-icon {
    font-size: 35px;
    margin-bottom: 15px;
}

.feature-card h3 {
    margin-bottom: 10px;
}

.feature-card p {
    color: var(--muted);
}

/* =====================================
   AUTENTIFICARE
===================================== */

.auth-section {
    padding: 85px 20px;

    background: linear-gradient(
        135deg,
        #e8f1ff,
        #e5f8ef
    );
}

.auth-container {
    max-width: 480px;
    margin: auto;
    background: white;
    padding: 35px;
    border-radius: 18px;
    border-top: 5px solid var(--secondary);

    box-shadow: 0 10px 35px rgba(0,0,0,0.07);
}

.auth-heading {
    text-align: center;
    margin-bottom: 25px;
}

.auth-tabs {
    display: flex;
    margin-bottom: 25px;
    border-bottom: 2px solid #edf1f7;
}

.auth-tab {
    flex: 1;
    padding: 13px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--muted);
    font-weight: bold;
    transition: 0.3s;
}

.auth-tab.active {
    color: var(--secondary);
    border-bottom: 3px solid var(--secondary);
}

#loginForm,
#registerForm {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#loginForm[hidden],
#registerForm[hidden] {
    display: none;
}

.auth-container label {
    font-size: 14px;
    font-weight: bold;
}

.auth-container input,
.auth-container select {
    width: 100%;
    padding: 13px;
    border: 1px solid #dce5f1;
    border-radius: 9px;
    font-size: 15px;
    outline: none;
    transition: 0.3s;
}

.auth-container input:focus,
.auth-container select:focus {
    border-color: var(--secondary);
    box-shadow: 0 0 0 3px rgba(25,168,117,0.12);
}

.auth-container form .primary-button {
    margin-top: 12px;
}

#authMessage {
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
}

/* =====================================
   FOOTER
===================================== */

.footer {
    background: var(--dark);
    border-top: 4px solid var(--secondary);
    color: #c6d5eb;
    text-align: center;
    padding: 30px 15px;
    font-size: 13px;
}

/* =====================================
   ANIMATII
===================================== */

@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* =====================================
   RESPONSIVE - TELEFOANE
===================================== */

@media (max-width: 700px) {

    .header {
        padding: 15px 5%;
        flex-wrap: wrap;
        gap: 15px;
    }

    .navigation {
        gap: 13px;
        flex-wrap: wrap;
    }

    .navigation a {
        font-size: 13px;
    }

    .hero {
        padding: 75px 7%;
        min-height: 450px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .features {
        padding: 60px 6%;
    }

    .auth-container {
        padding: 25px 20px;
    }
}
