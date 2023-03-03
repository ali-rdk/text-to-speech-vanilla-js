import EL from "../../utils/EL.js"

const Form = () =>{
    const form = EL({
            element: 'div',
            className: 'bg-slate-200 h-[30rem] w-[25rem] mt-[7rem] mx-auto p-4 flex flex-col rounded-xl gap-3 justify-between',
            children: [
                EL({
                    element: 'textarea',
                    className: 'h-[40%] w-full rounded-md p-4',
                    placeholder: "type something..."
                }),
                EL({
                    element: 'div',
                    className: 'flex flex-row mx-auto',
                    children: [
                        EL({
                            element:'div',
                            className: '',
                            children: [
                                EL({
                                    element: 'p',
                                    className: 'text-lg',
                                    innerHTML: "Volume"
                                }),
                                EL({
                                    element: 'input',
                                    type: 'range',
                                    min: '0',
                                    max: '10',
                                    value: '1',
                                    step: '0.5',
                                    id: 'volume',
                                }),
                                EL({
                                    element: 'span',
                                    className: 'text-lg ml-2',
                                    innerHTML: "1",
                                    id: 'vol-lable'
                                }),
                                EL({
                                    element:'div',
                                    className: '',
                                    children: [
                                        EL({
                                            element: 'p',
                                            className: 'text-lg',
                                            innerHTML: "Speed"
                                        }),
                                        EL({
                                            element: 'input',
                                            type: 'range',
                                            min: '0',
                                            max: '10',
                                            value: '1',
                                            step: '0.5',
                                            id: 'speed',
                                        }),
                                        EL({
                                            element: 'span',
                                            className: 'text-lg ml-2',
                                            innerHTML: "1",
                                            id: 'speed-lable'
                                        })
                                    ]
                                })
                            
                            ]
                        })
                    ]
                }),
                EL({
                    element: 'select',
                    className: 'rounded-md',
                    id: 'voices'
                }),
                EL({
                    element: 'button',
                    className: 'bg-red-500 color-white rounded-md h-8',
                    innerHTML: "play",
                    id: 'btn'
                })
            ]
        })
    return form;
}

export default Form;