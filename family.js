function underlineClick(index) {
    switch(index){
        case 1: {
            image = "<img src=\"myimages/pic.jpg\" width=40% height=40%>"
            desc = "- Yeah, it's just me. Surprised? Look at this nerd."
            break
        }
        case 2: {
            image = "<img src=\"myimages/fam-sis.jpg\" width=50% height=50%>"
            desc = "- Currently in the 4th year of her college, she's a great artist. She sometimes sells her own art pieces in the form of merchandise."
            break
        }
        case 3: {
            image = "<img src=\"myimages/fam-bro.jpg\" width=40% height=40%>"
            desc = "- Currently in his 6th grade. He plays Roblox a lot. Doesn't prioritize studies for this reason."
            break
        }
        case 4: {
            image = "<img src=\"myimages/fam-dad.jpg\" width=40% height=40%>"
            desc = "- My hard-working father. He is the president of our HOA here where we live. Dedicated."
            break
        }
        case 5: {
            image = "<img src=\"myimages/fam-mom.jpg\" width=40% height=40%>"
            desc = "- My charming mother. The communicator of the family. Loves everyone of us."
            break
        }
        case 6: {
            image = "<img src=\"myimages/fam-mira.jpg\" width=40% height=40%>"
            desc = "- Our dog, Mira. Gentle, yet dangerous. Woof woof. (By the way, how'd you find this?)"
            break
        }
    }
    document.getElementById("fampic").innerHTML = image;
    document.getElementById("famdesc").innerHTML = desc
}

