function color()
	{   
	    let   x = Math.floor(Math.random() * 255)  
	    let   y = Math.floor(Math.random() * 255)
	    let   z = Math.floor(Math.random() * 255)
	    document.body.style.backgroundColor = `rgb(${x},${y},${z})`
	}

function myTouch()
	{
	    let letters = 0
	    let words_glob = 0
	    let sentence = 0
	    let val = document.getElementById("input").value
	    if(val[val.length - 1] != "." && val.length != 0)
	        val += "."
	        sentence = val.split('.')
	  

	    let sentence_num = sentence.length

	    for(let sen_ind = 0; sen_ind < sentence_num - 1; sen_ind ++ )
	        {
	            let sent = sentence[sen_ind].replace(/[0-9]/g, "")

	            let words = sent.split(" ").filter(function (el){ return el != ""})

	            let word_num = words.length
	                words_glob += word_num

	            for(let word_ind=0; word_ind<word_num; word_ind++)
	                {
	                    words[word_ind] = words[word_ind].trim()
	                    letters += words[word_ind].length
	                }
	        }
	        document.getElementById("output").innerHTML = `Number of letters -  ${letters}<br>
	                                                       Number of words -  ${words_glob}<br>
	                                                       Number of sentences - ${sentence_num-1}
	                                                       
	                                                       `
    }	
