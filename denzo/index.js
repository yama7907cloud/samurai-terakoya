const $id = document.getElementById("jsWrap");
const $idselec = $id.querySelectorAll("p");
const $iddata = $id.querySelectorAll("[data-numeric]");
const $replace = document.getElementById("look");

let lights = 0;
let subTotal = "";
let countInt = 0;
let keyValue ="";
let juggement=0;
let jugg3 =0;
let i=0;

function numeric(e){

    if(juggement==1){
        lights = 0;
        subTotal = "";
        countInt = 0;
        keyValue ="";
        juggement=0;
        $replace.textContent = "";
        console.log("初期化しました");
    }

    const $keyword=e.target;
    const $keyvalue = $keyword.dataset.numeric;

    if($keyvalue == "C"){
        window.location.reload();   
    }else if(isNaN($keyvalue)){
        if($replace.textContent != ""){
                countInt = 1;
                if(subTotal == ""){///////１かいめ
                    console.log("1回目");
                    if($keyvalue == "="){
                        juggement=1;
                    }else{
                        keyValue = $keyvalue;
                        subTotal = $replace.textContent;
                    }
                }else if(jugg3 == 1){///////３かいめ
                    console.log("3回目");
                    subTotal = Number(subTotal);
                    val2 = Number(val2);
                    subTotal = Number(subTotal);
                    jugg3 = 0;
                    if(value2 == "*"){
                        onec= Number(val2) * Number($replace.textContent);
                        if(keyValue == "+"){
                            $replace.textContent = onec + subTotal;
                            subTotal = $replace.textContent;
                            keyValue = $keyvalue;
                        }else if(keyValue == "-"){
                            $replace.textContent=onec - subTotal;
                            subTotal = $replace.textContent;
                            keyValue = $keyvalue;
                        }
                    }else if(value2 == "/"){
                        onec= Number(val2) / Number($replace.textContent);
                        if(keyValue == "+"){
                            $replace.textContent=onec + subTotal;
                            subTotal = $replace.textContent;
                            keyValue = $keyvalue;
                        }else if(keyValue == "-"){
                            $replace.textContent=onec - subTotal;
                            subTotal = $replace.textContent;
                            keyValue = $keyvalue;
                        }
                    }else if(value2 == "+"){
                        if(keyValue == "+"){
                            $replace.textContent=subTotal + val2 + Number($replace.textContent);
                            subTotal = $replace.textContent;
                            keyValue = $keyvalue;
                        }else if(keyValue == "-"){
                            $replace.textContent=subTotal - val2 + Number($replace.textContent);
                            subTotal = $replace.textContent;
                            keyValue = $keyvalue;
                        }
                                    
                    }else if(value2 == "-"){
                        if(keyValue == "+"){
                            $replace.textContent=subTotal + val2 - Number($replace.textContent);
                            subTotal = $replace.textContent;
                            keyValue = $keyvalue;
                        }else if(keyValue == "-"){
                            $replace.textContent=subTotal - val2 - Number($replace.textContent);
                            subTotal = $replace.textContent;
                            keyValue = $keyvalue;
                        }
                        /////ここからここから
                    }else if($keyvalue == "="){
                        if(value2 == "*"){
                            onec = val2 * Number($replace.textContent);
                                if(keyValue == "+"){
                                    $replace.textContent=onec + subTotal;
                                    subTotal = $replace.textContent;
                                    keyValue = $keyvalue;
                                    juggement=1;
                                }else if(keyValue == "-"){
                                    $replace.textContent = onec - subTotal;
                                    subTotal = $replace.textContent;
                                    keyValue = $keyvalue;
                                    juggement = 1;
                                } 
                        }else if(value2 == "/"){
                            onec = val2 / Number($replace.textContent);
                                if(keyValue == "+"){
                                    $replace.textContent= onec + subTotal;
                                    subTotal = $replace.textContent;
                                    keyValue = $keyvalue;
                                    juggement= 1;
                                }else if(keyValue == "-"){
                                    $replace.textContent = onec - subTotal;
                                    subTotal = $replace.textContent;
                                    keyValue = $keyvalue;
                                    juggement = 1;
                                }
                           
                        }else if(value2 == "+"){
                            if(keyValue == "+"){
                                $replace.textContent=subTotal + val2 + Number($replace.textContent);
                                subTotal = $replace.textContent;
                                keyValue = $keyvalue;
                                juggement = 1;
                            }else if(keyValue == "-"){
                                $replace.textContent=subTotal - val2 + Number($replace.textContent);
                                subTotal = $replace.textContent;
                                keyValue = $keyvalue;
                                juggement = 1;
                           
                        }    
                        }else if(value2 == "-"){
                            if(keyValue == "+"){
                                $replace.textContent=subTotal + val2 - Number($replace.textContent);
                                subTotal = $replace.textContent;
                                keyValue = $keyvalue;
                                juggement = 1;
                            }else if(keyValue == "-"){
                                $replace.textContent=subTotal - val2 - Number($replace.textContent);
                                subTotal = $replace.textContent;
                                keyValue = $keyvalue;
                                juggement = 1;
                            }
                        }
                    }
                }else{
                    subTotal = Number(subTotal);
                    if(keyValue == "*"){
                        $replace.textContent = subTotal * Number($replace.textContent); 
                        subTotal = $replace.textContent;
                        keyValue = $keyvalue;
                    }else if(keyValue == "/"){
                        $replace.textContent =subTotal / Number($replace.textContent);
                        subTotal = $replace.textContent;
                        keyValue = $keyvalue;
                    }else if($keyvalue == "="){
                        if(keyValue == "*"){
                            $replace.textContent =subTotal * Number($replace.textContent); 
                            juggement=1;
                        }else if(keyValue == "/"){
                            $replace.textContent =subTotal / Number($replace.textContent);
                            juggement=1;
                        }else if(keyValue == "+"){
                            $replace.textContent =subTotal + Number($replace.textContent);
                            juggement=1;
                        }else{
                            $replace.textContent =subTotal - Number($replace.textContent);
                            juggement=1;
                        }
                    }else{
                        value2 = $keyvalue;
                        val2 = $replace.textContent;
                        jugg3 = 1;
                    }
                }
        }
    }else{
        if(countInt != 1){
            $replace.textContent += $keyvalue;
        }else{
            countInt = 0;
            $replace.textContent = $keyvalue;
        }
    }
}
$id.addEventListener("click", numeric);