import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/services-model';
import { Observable, of } from 'rxjs';
import { Plan } from '../models/plan-model';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurshipService {
  private services: Service[] = [
    {
      id: 1,
      title: "Diseño web",
      description: "Creamos sitios web atractivos, responsive y optimizados que reflejan la identidad de tu marca. ",
      icon: "bi bi-pc-display-horizontal"
    },
    {
      id: 2,
      title: "Diseño de e-commerce",
      description: "Tiendas online a medida enfocadas en ventas.",
      icon:"bi bi-cart-fill"
    },
    {
      id: 3,
      title: "Marketing digital",
      description: "Estrategias personalizadas para aumentar tu visibilidad online y generar leads.",
      icon:"bi bi-megaphone-fill"
    }
  ]
  private plans: Plan[] = [
    {
      id: 1,
      plan_name: "Plan Medio",
      subtitle: "Para pequeñas empresas o emprendimientos",
      description: "Diseño web profesional con optimización SEO para atraer más visitas."
    },
    {
      id: 2,
      plan_name: "Plan Básico",
      subtitle: "Ideal para proyectos personales",
      description: "Diseño web simple y atractivo para portafolios o proyectos personales."
    },
    {
      id: 3,
      plan_name: "Plan Premium",
      subtitle: "Todo lo que necesitas para un negocio exitoso",
      description: "Diseño web personalizado, optimización SEO avanzada y e-commerce."
    }
  ]    
  constructor() {
  }
  getAllServices(): Observable<Service[]> {
    return of(this.services);
  }

  getAllPlans(): Observable<Plan[]> {
    return of(this.plans)
  }
}
