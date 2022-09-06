import React, {useEffect, useState, useCallback} from "react";
import {AdaptiveForm} from "@aemforms/af-react-renderer";
import mappings from "./material-ui/mappings";
import useEditorEvents from "./hooks/useEditorEvents";
import ReactDOM from "react-dom";
import { Action } from '@aemforms/af-core';
import {useParams} from 'react-router-dom';
//@ts-ignore
import {Provider as Spectrum3Provider, defaultTheme} from '@adobe/react-spectrum'
// import the dictionary created using
// @ts-ignore
import localizationMessages from '../../../generated/__localization__/multistep.form.i18n.json';
// @ts-ignore
import formJson from '../examples/multistep.form.json';

const base64url = (s: any) => {
    var to64url = btoa(s);
    // Replace non-url compatible chars with base64url standard chars and remove leading =
    return to64url.replace(/\+/g, '_').replace(/\//g, '-').replace(/=+$/g, '');
}


export const getId = () => {
    let id =  ""
    if (!process.env.FORMPATH) {
        const parent = document.querySelector(".cmp-formcontainer")
        id = parent.getAttribute("data-form-id")
    } else {
        id = base64url(process.env.FORMPATH)
    }
    return id;
}

const getForm = async (id: string) => {
    const resp = await fetch(`/adobe/forms/af/v1/${id}`)
    const json = (await resp.json())
    return json
}

const Form = (props: any) => {
    const [form, setForm] = useState("")
    const [state, setState] = useEditorEvents()
    // locale specific state
    const {lang} = useParams();
    const fetchForm = async () => {
        let id = getId();
        if (id) {
            const json:any = await getForm(id);
            setForm(JSON.stringify(json.afModelDefinition))
        }
    }
    useEffect(() => {
        fetchForm()
    }, [state]);
    if (form != "") {
        const element = document.querySelector(".cmp-formcontainer__content")
        const retVal = (<Spectrum3Provider theme={defaultTheme}>
            <AdaptiveForm
                formJson={formJson /*JSON.parse(form)*/}
                localizationMessages={localizationMessages}
                mappings={mappings}
                locale={lang}/>
        </Spectrum3Provider>)
        return ReactDOM.createPortal(retVal, element)
    }
    return null
}

export default Form