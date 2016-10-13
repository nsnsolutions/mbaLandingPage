# VFS.Editor

## Description 

This is a stand-alone editor that can be accessed approved VFS sponsors and their clients.   

VFS Docs - http://readme.velma.com/

To see in action paste the link below into your favorite browser. 

http://editor.vfs.velma.com/#/editor/1?templatefile=https:%2F%2Fs3-us-west-2.amazonaws.com%2Fvfs-assets%2Fuser%2Fdcarter%2Feditor%2Ftemplatefile1.json&useruri=https:%2F%2Fapi.velma.com%2Fapi%2Fohf%2Fs%2F6560&partnersuri=https:%2F%2Fapi.velma.com%2Fapi%2Fohf%2Fs%2F6560%2Fp&partneruri=https:%2F%2Fapi.velma.com%2Fapi%2Fohf%2Fs%2F6560%2Fp%2F$$ID$$&sponsorkey=70d1e05967d44c8d9a550fefe4530633&clientkey=f03cbf3cabac41b0ad9518462c897d1c&css=https:%2F%2Fs3-us-west-2.amazonaws.com%2Feditor%2FOHF.css



## Screenshot

![alt text](https://s3-us-west-2.amazonaws.com/vfs-assets/Editor/OHFScreenShot.PNG "Logo Title Text 1")

## Launching

The editor can be launch using different methods. 

1. **Url Method**
    
    Editor Url: http://editor.vfs.velma.com/#/editor/1
    * Params
        * templatefile=https://s3/mytemplateFile.json
    
    Sample templatefile
        
            "templates": [
                {
                    "url": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF_5.html",
                    "thumb": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF-4-Preview_Thumb.png",
                    "contactArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/ContactAreaNew.html",
                    "disclaimerArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/DisclaimerArea.html",
                    "productTemplateId": 1
                },
                {
                    "url": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF_4.html",
                    "thumb": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF-4-Preview_Thumb.png",
                    "contactArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/ContactAreaNew.html",
                    "disclaimerArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/DisclaimerArea.html",
                    "productTemplateId": 1
                },
                {
                    "url": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OH_2_V3.html",
                    "thumb": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF-3-Preview.png",
                    "contactArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/ContactAreaNew.html",
                    "disclaimerArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/DisclaimerArea.html",
                    "productTemplateId": 1
                },        
            ]


        
    * useruri - call to retrieve user information 
    * partnersuri - call to retrieve partner list
    * partneruri -  call to retrieve partner information 
    * sponsorkey - key for vfs authentication
    * clientkey - key for vfs authentication
    * css - to style the template 

2. **URL Base64 Method**

The base64 method uses the concept of sending a command packet to the Editor via encoding it as base64. 

Editor Url: http://editor.vfs.velma.com/#/editor/1?post='+ base64CommandPacket;

Sample Command Packet (Documentation Inline) 

Notes: 

##### The partner $$ID$$ for the partner url can be ID, id, Id or id

      {
        "docId": "*** Required: client doc id -- to reference this doc ***",
        "docId": "12506d92c7244043ade7873551f7dce9",
        "css": "*** css to apply to editor ***",
        "css": "https://s3-us-west-2.amazonaws.com/editor/OHF.css",
        "vfs": "*** vfs integration keys ***",
        "vfs": {
            "sponsorKey": "70d1e05967d44c8d9a550fefe4530633",
            "clientKey": "f03cbf3cabac41b0ad9518462c897d1c"
        },
        "userUri": "*** call to fetch user information if not passed in ***",
        "userUri": "https://api.velma.com/api/ohf/s/6560",
        "user": "*** user information ****",
        "user": {
            "ID": 6560,
            "UserName": "demo10@velmatools.com1",
            "LastName": "Public",
            "FirstName": "John",
            "FullName": "John Public",
            "Email": "john.public@1stDemoMortgage.com",
            "Company": "1st Demo Mortgage Company",
            "Title": "Senior Loan Officer",
            "NMLS": "123456789",
            "Disclaimer": "1st Demo Mortgage disclaimer",
            "PhotoUrl": "https://api.velma.com/api/subscribers/image/demo10@velmatools.com/1/150/150"
        },
        "partnersUri": "*** call to fetch partner list if not passed in ***",
        "partnersUri": "https://api.velma.com/api/ohf/s/6560/p",
        "partnerUri": " *** call to retrieve partner info by ID (**) ***",
        "partnerUri": "https://api.velma.com/api/ohf/s/6560/p/$$ID$$",
        "partners": "*** partner list ***",
        "partners": [
            {
                "ID": 1964,
                "LastName": "Partner",
                "FirstName": "Jennifer",
                "Email": "jennifer@velma.com",
                "CellPhone": "2085552112", 
                "PhotoUrl": "https://api.velma.com/api/partner/image/1964/1/150/150"
            },
            {
                "ID": 14849,
                "LastName": "Realtor",
                "FirstName": "John",
                "Email": "John@velma.com",
                "CellPhone": "2085552113",
                "PhotoUrl": "https://api.velma.com/api/subscribers/image/demo10@velmatools.com/1/150/150"
            }
        ],
        "templates": "*** 1 Required: passed in list of templates ****",
        "templates": [
            {
                "url": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF_5.html",
                "thumb": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF-4-Preview_Thumb.png",
                "contactArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/ContactAreaNew.html",
                "disclaimerArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/DisclaimerArea.html",
                "productTemplateId": 1
            },
            {
                "url": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF_4.html",
                "thumb": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF-4-Preview_Thumb.png",
                "contactArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/ContactAreaNew.html",
                "disclaimerArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/DisclaimerArea.html",
                "productTemplateId": 1
            },
            {
                "url": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OH_2_V3.html",
                "thumb": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/OHF-3-Preview.png",
                "contactArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/ContactAreaNew.html",
                "disclaimerArea": "https://s3-us-west-2.amazonaws.com/vfs-assets/user/nnordby/DisclaimerArea.html",
                "productTemplateId": 1
            }
        ],
        "toolbar": "*** toolbar overrides ***",
        "toolbar": {
            "editAttr": "editType",
            "editOverrides": "editOverrides",
            "toolbars": {
                "simple": 
                    [
                        "bold"
                    ],
                "full": 
                    [
                        "italic", 
                        "underline", 
                        "strikeThrough", 
                        "subscript", 
                        "superscript", 
                        "-"
                    ],
                "image": 
                    [
                        "bold", 
                        "italic"
                    ]
            }
        }
     }

## Toolbar

    
![alt text](https://s3-us-west-2.amazonaws.com/vfs-assets/Editor/Toolbar.PNG
 "Editor Toolbar")

 The toolbar current has 5 buttons (from left to right)

 * Save to session - Saves the html to localstorage. 
 * Partner Dropdown - Allows the user to select a partner 
 * Template List Dropdown - Allows user to select a different template  
 * Preview - Generates a PDF Preview
 * Edit - Select Edit Mode. 

## Editor Document CSS -- (Coming Soon)















