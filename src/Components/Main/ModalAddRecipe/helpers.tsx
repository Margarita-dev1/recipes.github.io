
export type TFile = {
    content: string,
    id: string
}

export const initialValues = {
    name:'',
    text:'',
    timeHours:'',
    timeMins:'',
    difficulty:'',
     images:[] as TFile[],
}