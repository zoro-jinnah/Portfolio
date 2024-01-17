fetch("projects.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    data.project.forEach(pro =>{
        let rowGrid = document.querySelector(".row-grid")
        let li = document.createElement("li")
        rowGrid.appendChild(li)

        let Imgg = document.createElement("div")
        Imgg.classList.add("IMGG")
        li.appendChild(Imgg)

        let Img = document.createElement("img")
        Img.src = pro.img
        Imgg.appendChild(Img)

        let pn = document.createElement("div")
        pn.classList.add("project-name")
        Imgg.appendChild(pn)

        let pt = document.createElement("h6")
        pt.classList.add("project-text")
        pn.appendChild(pt)
        pt.textContent = pro.project_name

        let links = document.createElement("div")
        links.classList.add("links")
        Imgg.appendChild(links)

        let btn = document.createElement("button")
        btn.classList.add("Btn")
    links.appendChild(btn)

        let spn = document.createElement("span")
        spn.classList.add("svgContainer")
        btn.appendChild(spn)
        let anchor = document.createElement("a")
        anchor.setAttribute("href", pro.git_link)
        spn.appendChild(anchor)
        anchor.target = "blank"
        let icon1 = document.createElement("img")
        icon1.src=pro.git_img
        anchor.appendChild(icon1)
        let spn1 = document.createElement("span")
        spn1.classList.add("BG")
        btn.appendChild(spn1)


        let btn2 = document.createElement("button")
        btn2.classList.add("Btn")
        links.appendChild(btn2)

        let spns = document.createElement("span")
        spns.classList.add("svgContainer")
        btn2.appendChild(spns)
        let anchors = document.createElement("a")
        anchors.setAttribute("href", pro.netli_link)
        spns.appendChild(anchors)
        anchors.target = "blank"

        let icon2 = document.createElement("img")
        icon2.src=pro.netli_img
        anchors.appendChild(icon2)
        let spnss = document.createElement("span")
        spnss.classList.add("BG")
        btn2.appendChild(spnss)

    })
})