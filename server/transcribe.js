import { pipeline } from "@xenova/transformers";

export async function transcribe(audio){
    try {
        console.log("Transcribing...")
        const transcribe = await pipeline(
            "automatic-speech-recognition",
            "Xenova/whisper-small"
        )

        const transcription = await transcribe(audio, {
            chunk_length_s: 30,
            stride_length_s: 5,
            language: "english",
            task:"transcribe",
        })

        console.log("Video transcribed!")
        return transcription?.text.replace("[Music]", "")

    } catch (error) {
        throw new Error(error)
    }
}