"uses strict"

const textArea = document.querySelector("#text")
const speak = document.querySelector("#speak")
const pause = document.querySelector("#pause")
const resume = document.querySelector("#resume")
const cancel = document.querySelector("#cancel")
const select_voice = document.querySelectorAll("#voice")


const speech = new SpeechSynthesisUtterance()

function interact() {
    let speechVoice = []

    window.speechSynthesis.onvoiceschanged = () => {
        speechVoice = window.speechSynthesis.getVoices()

        speech.voice = speechVoice[0]

       select_voice.forEach((row, i) => {
        select_voice.options[i] = new Option(row.name,i )
       })
    }
}

interact()

speak.addEventListener("click", ()=>{
    speech.text = textArea.value
    window.speechSynthesis.speak(speech)   
})
pause.addEventListener("click", () => {
    window.speechSynthesis.pause()
}) 
resume.addEventListener("click", () => {
    window.speechSynthesis.resume()
})
cancel.addEventListener("click", () => {
    window.speechSynthesis.cancel()
})