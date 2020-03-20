import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder  } from '@angular/forms';
@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  CrearOrdenesForm:FormGroup;
  afiliados:any[]=[{'id':'10000000000','nombre':'Avianca'},
                   {'id':'10000000001','nombre':'Ecopetrol'},
                   {'id':'10000000003','nombre':'Sura'}]
  instrumentos:any[]=[{'id':'20000000000','tipo':'Renta variable','nombre':'Acciones'},
                      {'id':'20000000001','tipo':'Renta variable','nombre':'Derivados'},
                      {'id':'30000000001','tipo':'Renta fija','nombre':'Certificados de Inversión'},
                      {'id':'30000000002','tipo':'Renta fija','nombre':'Bonos'}]              
  especies:any[]=[{'id':'40000000000','nombre':'Escriturales'},
                  {'id':'40000000001','nombre':'Nominativas'},
                  {'id':'40000000003','nombre':'Portador'}]     
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.CrearOrdenesForm=this.formBuilder.group(
      {
        precio:['',[Validators.required,Validators.min(0)]],
        cantidad:['',[Validators.required,Validators.min(0)]],
        tipoOrden:['0',[Validators.required]],
        tipoOferta:['0',[Validators.required]],
        afiliado:['',[Validators.required]],
        instrumento:['',[Validators.required]],
        trader:['',[Validators.required]],
        especie:['',[Validators.required]]
      }
    );
  }

  SendData(data)
  {
    console.log('dfdf',data);
  }

}
