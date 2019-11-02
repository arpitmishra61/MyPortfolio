$(document).ready(function () {
    let navs = document.querySelectorAll(".nav-link")
    navs.forEach((m) => {
        m.addEventListener('click', (e) => {
            navs.forEach((m) => {
                if (m.classList.contains('active')) {
                    m.classList.remove('active')

                }
            })

            e.target.classList.add('active')

        })
    })
    let home = $("#home");
    let about = $("#about");
    let skills = $("#skills");
    let projects = $("#localprojects");

    let achievements = $("#achievements");
    let contact = $("#contact")
    let footer = $("#footer")
    let rc;
    let navheight = $('.navbar').outerHeight()
    console.log(home.offset())
    window.addEventListener('scroll', () => {
        if (window.scrollY >= home.offset().top - navheight && window.scrollY < about.offset().top - navheight && !navs[0].classList.contains('active')) {
            navs.forEach((m) => {
                if (m.classList.contains('active')) {
                    rc = m;
                }
            })
            rc.classList.remove('active');
            navs[0].classList.add('active')

        }
        else


            if (window.scrollY >= about.offset().top - navheight && window.scrollY < skills.offset().top - navheight && !navs[1].classList.contains('active')) {
                navs.forEach((m) => {
                    if (m.classList.contains('active')) {
                        rc = m;
                    }
                })
                rc.classList.remove('active');
                navs[1].classList.add('active')

            }

            else
                if (window.scrollY >= skills.offset().top - navheight && window.scrollY < projects.offset().top - navheight && !navs[2].classList.contains('active')) {
                    navs.forEach((m) => {
                        if (m.classList.contains('active')) {
                            rc = m;
                        }
                    })
                    rc.classList.remove('active');
                    navs[2].classList.add('active')

                }
                else
                    if (window.scrollY >= projects.offset().top - navheight && window.scrollY < achievements.offset().top - navheight && !navs[3].classList.contains('active')) {
                        navs.forEach((m) => {
                            if (m.classList.contains('active')) {
                                rc = m;
                            }
                        })
                        rc.classList.remove('active');
                        navs[3].classList.add('active')

                    }
                    else
                        if (window.scrollY >= achievements.offset().top - navheight && window.scrollY < contact.offset().top - navheight && !navs[4].classList.contains('active')) {
                            navs.forEach((m) => {
                                if (m.classList.contains('active')) {
                                    rc = m;
                                }
                            })
                            rc.classList.remove('active');
                            navs[4].classList.add('active')

                        }
                        else
                            if (window.scrollY >= contact.offset().top - navheight && !navs[5].classList.contains('active')) {
                                navs.forEach((m) => {
                                    if (m.classList.contains('active')) {
                                        rc = m;
                                    }
                                })
                                rc.classList.remove('active');
                                navs[5].classList.add('active')

                            }


    })

});








