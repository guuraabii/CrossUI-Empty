// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("53.333333333333336em")
                .setTop("1.6666666666666667em")
                .setWidth("11.166666666666666em")
                .setHeight("9.5em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("1.6em")
                .setTop("0.4em")
                .setWidth("11.107142857142858em")
                .setHeight("2.607142857142857em")
                .setCaption("Student Registration Form")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY":{
                        "font-family":"impact,chicago",
                        "font-size":"50px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setDirtyMark(false)
                .setLeft("3.3333333333333335em")
                .setTop("13.333333333333334em")
                .setWidth("19.166666666666668em")
                .setHeight("4.833333333333333em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Name:")
                .setLabelHAlign("left")
                .setCustomStyle({
                    "KEY":{
                        "font-family":"arial black,avant garde",
                        "font-size":"14px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("3.5714285714285716em")
                .setTop("18.571428571428573em")
                .setWidth("19.166666666666668em")
                .setHeight("4.833333333333333em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Student Number:")
                .setLabelHAlign("left")
                .setCustomStyle({
                    "KEY":{
                        "font-family":"arial black,avant garde",
                        "font-size":"14px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setDirtyMark(false)
                .setLeft("3.5714285714285716em")
                .setTop("24.285714285714285em")
                .setWidth("19.166666666666668em")
                .setHeight("4.833333333333333em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Address:")
                .setLabelHAlign("left")
                .setCustomStyle({
                    "KEY":{
                        "font-family":"arial black,avant garde",
                        "font-size":"14px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setDirtyMark(false)
                .setLeft("3.5714285714285716em")
                .setTop("30em")
                .setWidth("19.166666666666668em")
                .setHeight("4.833333333333333em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Contact Number:")
                .setLabelHAlign("left")
                .setCustomStyle({
                    "KEY":{
                        "font-family":"arial black,avant garde",
                        "font-size":"14px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input10")
                .setDirtyMark(false)
                .setLeft("33.57142857142857em")
                .setTop("15.714285714285714em")
                .setWidth("19.166666666666668em")
                .setHeight("4.833333333333333em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Name:")
                .setLabelHAlign("left")
                .setCustomStyle({
                    "KEY":{
                        "font-family":"arial black,avant garde",
                        "font-size":"14px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input11")
                .setDirtyMark(false)
                .setLeft("33.857142857142854em")
                .setTop("21em")
                .setWidth("19.166666666666668em")
                .setHeight("4.833333333333333em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Student Number:")
                .setLabelHAlign("left")
                .setCustomStyle({
                    "KEY":{
                        "font-family":"arial black,avant garde",
                        "font-size":"14px"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input12")
                .setDirtyMark(false)
                .setLeft("33.857142857142854em")
                .setTop("26.642857142857142em")
                .setWidth("19.166666666666668em")
                .setHeight("4.833333333333333em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Address:")
                .setLabelHAlign("left")
                .setCustomStyle({
                    "KEY":{
                        "font-family":"arial black,avant garde",
                        "font-size":"14px"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});