export interface IndustryOutcome {
  efficiency: {
    value: string;
    label: string;
  };
  cost: {
    value: string;
    label: string;
  };
  satisfaction: {
    value: string;
    label: string;
  };
}

export interface IndustryGroup {
  id: string;
  name: string;
  description: string;
  outcomes: IndustryOutcome;
}

export interface Demo {
  id: string;
  name: string;
  industry: string;
  industryGroup: string;
  description: string;
  image: string;
  assistantId: string;
}

export const industryGroups: IndustryGroup[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Industrial and Manufacturing Solutions',
    outcomes: {
      efficiency: {
        value: '45%↓',
        label: 'Training Time'
      },
      cost: {
        value: '92%',
        label: 'Process Compliance'
      },
      satisfaction: {
        value: '67%↓',
        label: 'Safety Incidents'
      }
    }
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Automotive Industry Solutions',
    outcomes: {
      efficiency: {
        value: '38%↓',
        label: 'Response Time'
      },
      cost: {
        value: '42%↑',
        label: 'First Visit Resolution'
      },
      satisfaction: {
        value: '94%',
        label: 'Customer Satisfaction'
      }
    }
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Energy and Utilities',
    outcomes: {
      efficiency: {
        value: '52%↓',
        label: 'Resolution Time'
      },
      cost: {
        value: '$840K',
        label: 'Annual Savings'
      },
      satisfaction: {
        value: '96%',
        label: 'Service Accuracy'
      }
    }
  },
  {
    id: 'banking',
    name: 'Banking',
    description: 'Banking and Financial Services',
    outcomes: {
      efficiency: {
        value: '82%',
        label: 'Query Resolution'
      },
      cost: {
        value: '3.2min',
        label: 'Avg Response Time'
      },
      satisfaction: {
        value: '94%',
        label: 'Customer Satisfaction'
      }
    }
  },
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Insurance Solutions',
    outcomes: {
      efficiency: {
        value: '68%↓',
        label: 'Processing Time'
      },
      cost: {
        value: '45%↑',
        label: 'Approval Rate'
      },
      satisfaction: {
        value: '92%',
        label: 'Claim Satisfaction'
      }
    }
  },
  {
    id: 'fintech',
    name: 'Fintech',
    description: 'Financial Technology Solutions',
    outcomes: {
      efficiency: {
        value: '92%↑',
        label: 'Transaction Success'
      },
      cost: {
        value: '$4.2M',
        label: 'Cost Savings'
      },
      satisfaction: {
        value: '98%',
        label: 'Service Uptime'
      }
    }
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Retail and E-commerce',
    outcomes: {
      efficiency: {
        value: '47%↑',
        label: 'Sales Conversion'
      },
      cost: {
        value: '28%↓',
        label: 'Return Rate'
      },
      satisfaction: {
        value: '$142',
        label: 'Avg Order Value'
      }
    }
  },
  {
    id: 'consumer-goods',
    name: 'Consumer Goods',
    description: 'Consumer Products and Goods',
    outcomes: {
      efficiency: {
        value: '52%↑',
        label: 'Support Efficiency'
      },
      cost: {
        value: '34%↓',
        label: 'Service Costs'
      },
      satisfaction: {
        value: '91%',
        label: 'Resolution Rate'
      }
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Healthcare Providers and Services',
    outcomes: {
      efficiency: {
        value: '76%↓',
        label: 'Wait Times'
      },
      cost: {
        value: '34%↑',
        label: 'Appointment Rate'
      },
      satisfaction: {
        value: '92%',
        label: 'Patient Satisfaction'
      }
    }
  },
  {
    id: 'pharma',
    name: 'Pharma',
    description: 'Pharmaceutical and Biotech',
    outcomes: {
      efficiency: {
        value: '82%↑',
        label: 'Trial Compliance'
      },
      cost: {
        value: '45%↓',
        label: 'Admin Overhead'
      },
      satisfaction: {
        value: '94%',
        label: 'Data Accuracy'
      }
    }
  },
  {
    id: 'medtech',
    name: 'MedTech',
    description: 'Medical Technology and Devices',
    outcomes: {
      efficiency: {
        value: '62%↑',
        label: 'Device Uptime'
      },
      cost: {
        value: '38%↓',
        label: 'Service Visits'
      },
      satisfaction: {
        value: '96%',
        label: 'Support Quality'
      }
    }
  },
  {
    id: 'business-services',
    name: 'Business Services',
    description: 'Professional and Business Services',
    outcomes: {
      efficiency: {
        value: '42%↑',
        label: 'Process Speed'
      },
      cost: {
        value: '$1.2M',
        label: 'Annual Savings'
      },
      satisfaction: {
        value: '89%',
        label: 'Client Satisfaction'
      }
    }
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Construction and Infrastructure',
    outcomes: {
      efficiency: {
        value: '45%↓',
        label: 'Project Delays'
      },
      cost: {
        value: '32%↓',
        label: 'Equipment Costs'
      },
      satisfaction: {
        value: '94%',
        label: 'Safety Compliance'
      }
    }
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Real Estate Services',
    outcomes: {
      efficiency: {
        value: '58%↑',
        label: 'Occupancy Rate'
      },
      cost: {
        value: '28%↓',
        label: 'Vacancy Time'
      },
      satisfaction: {
        value: '92%',
        label: 'Tenant Satisfaction'
      }
    }
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'High Tech and Software',
    outcomes: {
      efficiency: {
        value: '72%↑',
        label: 'Resolution Rate'
      },
      cost: {
        value: '45%↓',
        label: 'Support Costs'
      },
      satisfaction: {
        value: '96%',
        label: 'User Satisfaction'
      }
    }
  },
  {
    id: 'media',
    name: 'Media',
    description: 'Media and Entertainment',
    outcomes: {
      efficiency: {
        value: '62%↑',
        label: 'Content Discovery'
      },
      cost: {
        value: '34%↓',
        label: 'Support Costs'
      },
      satisfaction: {
        value: '88%',
        label: 'Viewer Engagement'
      }
    }
  },
  {
    id: 'telecom',
    name: 'Telecom',
    description: 'Telecommunications Services',
    outcomes: {
      efficiency: {
        value: '82%↑',
        label: 'First Call Resolution'
      },
      cost: {
        value: '4.2min',
        label: 'Handle Time'
      },
      satisfaction: {
        value: '67%↓',
        label: 'Escalations'
      }
    }
  },
  {
    id: 'public-sector',
    name: 'Public Sector',
    description: 'Government and Public Services',
    outcomes: {
      efficiency: {
        value: '92%↑',
        label: 'Service Access'
      },
      cost: {
        value: '24min',
        label: 'Processing Time'
      },
      satisfaction: {
        value: '88%',
        label: 'Citizen Satisfaction'
      }
    }
  }
];

export const demoData: Demo[] = [
  {
    "id": "mfg-1",
    "name": "Manufacturing Process Guide",
    "industry": "Manufacturing",
    "industryGroup": "manufacturing",
    "description": "Help operators with equipment procedures, safety protocols, and quality control processes.",
    "image": "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    "assistantId": "3e348277-14b0-43ba-806a-67306f940c3b"
  },
  {
    "id": "mfg-2",
    "name": "Maintenance Assistant",
    "industry": "Manufacturing",
    "industryGroup": "manufacturing",
    "description": "Guide technicians through equipment maintenance, troubleshooting, and repair procedures.",
    "image": "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
    "assistantId": "aee3e5fd-2a01-4746-b632-86f780fee6de"
  },
  {
    "id": "mfg-3",
    "name": "Production Data Reporter",
    "industry": "Manufacturing",
    "industryGroup": "manufacturing",
    "description": "Allow floor staff to report production numbers, scrap rates, and machine status updates via voice for real-time data collection.",
    "image": "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    "assistantId": "d915d8dc-ccd4-40a2-8207-8c37b7fe1ad3"
  },
  {
    "id": "auto-1",
    "name": "Auto Service Advisor",
    "industry": "Automotive",
    "industryGroup": "automotive",
    "description": "Guide customers through service scheduling, maintenance advice, and repair status updates.",
    "image": "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    "assistantId": "c40dbcfd-6534-4913-8d0b-63930c3a1216"
  },
  {
    "id": "auto-2",
    "name": "Vehicle Sales Assistant",
    "industry": "Automotive",
    "industryGroup": "automotive",
    "description": "Help customers explore vehicle options, compare models, and schedule test drives.",
    "image": "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",
    "assistantId": "bcea310d-3bca-4000-ab20-6a3ce8e2029a"
  },
  {
    "id": "auto-3",
    "name": "In-Car Vehicle Assistant",
    "industry": "Automotive",
    "industryGroup": "automotive",
    "description": "Provide drivers with hands-free access to vehicle status, diagnostics alerts, and basic control functions.",
    "image": "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
    "assistantId": "fc8cb9ab-c946-4ede-8d29-7217b8ac7410"
  },
  {
    "id": "energy-1",
    "name": "Energy Usage Advisor",
    "industry": "Energy",
    "industryGroup": "energy",
    "description": "Help customers monitor energy consumption, optimize usage, and understand billing.",
    "image": "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    "assistantId": "a8c62f61-c5cd-4b39-9707-d23591d60fdd"
  },
  {
    "id": "energy-2",
    "name": "Smart Home Energy Guide",
    "industry": "Energy",
    "industryGroup": "energy",
    "description": "Configure and troubleshoot smart home energy devices and automation.",
    "image": "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg",
    "assistantId": "2eaa483c-d746-499f-bb51-683444f4c6ed"
  },
  {
    "id": "energy-3",
    "name": "Outage Response Coordinator",
    "industry": "Energy",
    "industryGroup": "energy",
    "description": "Manage power outage reports, provide status updates, and coordinate emergency responses.",
    "image": "https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg",
    "assistantId": "a6caa458-e347-40f7-a2de-bab708a6dc2b"
  },
  {
    "id": "bank-1",
    "name": "Financial Services Advisor",
    "industry": "Banking",
    "industryGroup": "banking",
    "description": "Guide customers through account inquiries, transaction history, and financial planning options.",
    "image": "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg",
    "assistantId": "fd48af23-c3b4-499c-b70a-d2a99079f2a0"
  },
  {
    "id": "bank-2",
    "name": "Loan Application Guide",
    "industry": "Banking",
    "industryGroup": "banking",
    "description": "Assist customers with loan applications, documentation requirements, and status checks.",
    "image": "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg",
    "assistantId": "c32c95da-df9c-416b-834b-c1db9520fc0b"
  },
  {
    "id": "bank-3",
    "name": "Secure Account Manager",
    "industry": "Banking",
    "industryGroup": "banking",
    "description": "Enable secure balance checks, fund transfers between linked accounts, and bill payments via voice.",
    "image": "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
    "assistantId": "a3060605-bca6-477b-a43c-774fa9da725e"
  },
  {
    "id": "ins-1",
    "name": "Insurance Claims Assistant",
    "industry": "Insurance",
    "industryGroup": "insurance",
    "description": "Guide clients through claims processes, policy questions, and coverage details.",
    "image": "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
    "assistantId": "a77a46ad-4328-4ec0-910d-9fb716398667"
  },
  {
    "id": "ins-2",
    "name": "Policy Advisor",
    "industry": "Insurance",
    "industryGroup": "insurance",
    "description": "Help customers understand policy options, coverage limits, and premium calculations.",
    "image": "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg",
    "assistantId": "1e2e2bab-15af-41d5-b561-27b03996bde9"
  },
  {
    "id": "ins-3",
    "name": "Automated First Notice of Loss (FNOL) Reporter",
    "industry": "Insurance",
    "industryGroup": "insurance",
    "description": "Allow policyholders to initiate a claim immediately after an incident by providing initial details via voice.",
    "image": "https://images.pexels.com/photos/7681093/pexels-photo-7681093.jpeg",
    "assistantId": "a1868840-1dbf-45e3-94e1-82a4504cd417"
  },
  {
    "id": "fin-1",
    "name": "Account and Transaction Inquirer",
    "industry": "Fintech",
    "industryGroup": "fintech",
    "description": "Provide users with quick and secure voice access to account balances, recent transactions, and spending analysis.",
    "image": "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg",
    "assistantId": "6ede4c38-481b-4906-8906-1e0628d9f27b"
  },
  {
    "id": "fin-2",
    "name": "Financial Literacy Coach",
    "industry": "Fintech",
    "industryGroup": "fintech",
    "description": "Offer basic explanations of financial terms, concepts, and general tips for budgeting or saving via voice.",
    "image": "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    "assistantId": "70f0b933-559d-491e-8b04-2a4a50e2901c"
  },
  {
    "id": "fin-3",
    "name": "Payment Processing Guide",
    "industry": "Fintech",
    "industryGroup": "fintech",
    "description": "Assist with payment processing, transaction verification, and dispute resolution.",
    "image": "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    "assistantId": "da603244-1abe-48a2-96dc-5810424167d8"
  },
  {
    "id": "retail-1",
    "name": "Retail Shopping Assistant",
    "industry": "Retail",
    "industryGroup": "retail",
    "description": "Help customers find products, check inventory, process returns, and provide recommendations.",
    "image": "https://images.pexels.com/photos/6214472/pexels-photo-6214472.jpeg",
    "assistantId": "986d049f-a18a-4e0d-af94-b8833884393e"
  },
  {
    "id": "retail-2",
    "name": "Order Management Specialist",
    "industry": "Retail",
    "industryGroup": "retail",
    "description": "Track orders, handle shipping inquiries, and manage delivery updates.",
    "image": "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg",
    "assistantId": "a972271a-2db4-4c76-bdf4-3edf590942e1"
  },
  {
    "id": "retail-3",
    "name": "Loyalty Program Guide",
    "industry": "Retail",
    "industryGroup": "retail",
    "description": "Assist with rewards programs, point redemption, and special offers.",
    "image": "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    "assistantId": "7ef2f072-3fe6-40f4-8273-da56dda0652d"
  },
  {
    "id": "consumer-goods-1",
    "name": "Product Support Specialist",
    "industry": "Consumer Goods",
    "industryGroup": "consumer-goods",
    "description": "Provide product information, usage instructions, and troubleshooting assistance.",
    "image": "https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg",
    "assistantId": "c10e432a-a79b-4273-bcdf-901cbb79ec2b"
  },
  {
    "id": "consumer-goods-2",
    "name": "Warranty Claims Assistant",
    "industry": "Consumer Goods",
    "industryGroup": "consumer-goods",
    "description": "Process warranty claims, schedule repairs, and handle product replacements.",
    "image": "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg",
    "assistantId": "160cf260-3c22-43b4-b202-79e3e8ed8908"
  },
  {
    "id": "consumer-goods-3",
    "name": "Product Registration Guide",
    "industry": "Consumer Goods",
    "industryGroup": "consumer-goods",
    "description": "Help customers register products, activate warranties, and access support resources.",
    "image": "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
    "assistantId": "0fce3ae3-ec77-4f8d-917e-1e1b0d1a04cf"
  },
  {
    "id": "healthcare-1",
    "name": "Healthcare Patient Support",
    "industry": "Healthcare",
    "industryGroup": "healthcare",
    "description": "Voice assistant helping patients schedule appointments, refill prescriptions, and answer insurance questions.",
    "image": "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg",
    "assistantId": "dd69f719-f786-42a9-a59a-42d6a08c00c2"
  },
  {
    "id": "healthcare-2",
    "name": "Pre-arrival Assistant",
    "industry": "Healthcare",
    "industryGroup": "healthcare",
    "description": "Remind patients of upcoming appointments, provide directions, and guide them through pre-registration steps.",
    "image": "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
    "assistantId": "5a64b7db-7738-4aad-987c-f621569d08f9"
  },
  {
    "id": "healthcare-3",
    "name": "Care Coordination Guide",
    "industry": "Healthcare",
    "industryGroup": "healthcare",
    "description": "Coordinate care plans, follow-up appointments, and medication schedules.",
    "image": "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg",
    "assistantId": "3bf06244-90d3-47e7-bed1-87ad88f4cf6f"
  },
  {
    "id": "pharma-1",
    "name": "Pharmacy Information Line",
    "industry": "Pharma",
    "industryGroup": "pharma",
    "description": "Provide automated information on pharmacy hours, location, and basic medication availability.",
    "image": "https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg",
    "assistantId": "b7222a46-0514-46c6-bea7-d0d51f6c7e66"
  },
  {
    "id": "pharma-2",
    "name": "Clinical Trial Navigator",
    "industry": "Pharma",
    "industryGroup": "pharma",
    "description": "Guide participants through clinical trial processes, schedules, and requirements.",
    "image": "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
    "assistantId": "52dc4c5b-78bf-4fb6-83af-2f55e1d39a2c"
  },
  {
    "id": "pharma-3",
    "name": "Medication Adherence Coach",
    "industry": "Pharma",
    "industryGroup": "pharma",
    "description": "Help patients maintain medication schedules and manage prescription refills.",
    "image": "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg",
    "assistantId": "27d9d507-a07d-441e-97ca-bbabfef7e4ad"
  },
  {
    "id": "medtech-1",
    "name": "Device Setup Assistant",
    "industry": "MedTech",
    "industryGroup": "medtech",
    "description": "Guide users through medical device setup, calibration, and maintenance.",
    "image": "https://images.pexels.com/photos/4226252/pexels-photo-4226252.jpeg",
    "assistantId": "228968a8-ec3f-4b37-89b0-baee717988c8"
  },
  {
    "id": "medtech-2",
    "name": "Remote Monitoring Guide",
    "industry": "MedTech",
    "industryGroup": "medtech",
    "description": "Assist with remote patient monitoring systems and data interpretation.",
    "image": "https://images.pexels.com/photos/4226266/pexels-photo-4226266.jpeg",
    "assistantId": "ee6cb22e-5e65-44ed-999f-b9c8b1f50061"
  },
  {
    "id": "medtech-3",
    "name": "Equipment Training Coach",
    "industry": "MedTech",
    "industryGroup": "medtech",
    "description": "Provide training on medical equipment usage and safety protocols.",
    "image": "https://images.pexels.com/photos/4226270/pexels-photo-4226270.jpeg",
    "assistantId": "16c24601-3356-45bc-ac3e-4ff923913fc5"
  },
  {
    "id": "business-services-1",
    "name": "Business Process Guide",
    "industry": "Business Services",
    "industryGroup": "business-services",
    "description": "Help with business processes, workflow optimization, and service delivery.",
    "image": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    "assistantId": "775b3ca2-d73c-4cfc-b0c6-922d681dfa2c"
  },
  {
    "id": "business-services-2",
    "name": "Consulting Services Assistant",
    "industry": "Business Services",
    "industryGroup": "business-services",
    "description": "Coordinate consulting engagements, deliverables, and client communications.",
    "image": "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    "assistantId": "472b1ff7-4e69-4ce3-b1b8-35e28cb33f2a"
  },
  {
    "id": "business-services-3",
    "name": "Internal Knowledge Base Assistant",
    "industry": "Business Services",
    "industryGroup": "business-services",
    "description": "Allow employees to quickly access company policies, procedures, and information by asking questions via voice.",
    "image": "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg",
    "assistantId": "d56b1395-14bc-4428-8ac2-82d33ae43f43"
  },
  {
    "id": "construction-1",
    "name": "Construction Project Assistant",
    "industry": "Construction",
    "industryGroup": "construction",
    "description": "Help manage project timelines, material orders, and contractor coordination.",
    "image": "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    "assistantId": "8bee3678-4952-4a96-9bf9-4abec9fc54b8"
  },
  {
    "id": "construction-2",
    "name": "Safety Compliance Guide",
    "industry": "Construction",
    "industryGroup": "construction",
    "description": "Monitor safety protocols, conduct inspections, and manage compliance documentation.",
    "image": "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    "assistantId": "a1868840-1dbf-45e3-94e1-82a4504cd417"
  },
  {
    "id": "construction-3",
    "name": "Equipment Scheduling Assistant",
    "industry": "Construction",
    "industryGroup": "construction",
    "description": "Coordinate equipment rentals, deliveries, and maintenance schedules.",
    "image": "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    "assistantId": "3dca115d-d97a-4fd7-aacb-f88e04f448c8"
  },
  {
    "id": "real-estate-1",
    "name": "Real Estate Assistant",
    "industry": "Real Estate",
    "industryGroup": "real-estate",
    "description": "Assist clients with property searches, viewings, and rental/purchase inquiries.",
    "image": "https://images.pexels.com/photos/4046151/pexels-photo-4046151.jpeg",
    "assistantId": "c464eb45-973c-4e07-81e9-5277c2551759"
  },
  {
    "id": "real-estate-2",
    "name": "Property Management Assistant",
    "industry": "Real Estate",
    "industryGroup": "real-estate",
    "description": "Handle maintenance requests, tenant communications, and property inspections.",
    "image": "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
    "assistantId": "37b89725-4327-4f32-a0c7-3780e4e7b37d"
  },
  {
    "id": "real-estate-3",
    "name": "Mortgage Application Guide",
    "industry": "Real Estate",
    "industryGroup": "real-estate",
    "description": "Help clients navigate mortgage applications, documentation, and approval processes.",
    "image": "https://images.pexels.com/photos/7578939/pexels-photo-7578939.jpeg",
    "assistantId": "a74646fd-9985-4b9b-9ad7-061267d209a1"
  },
  {
    "id": "technology-1",
    "name": "Tech Support Specialist",
    "industry": "Technology",
    "industryGroup": "technology",
    "description": "Provide technical support, troubleshooting, and software guidance.",
    "image": "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",
    "assistantId": "9c7fcbac-c3ab-4cac-a91a-ac381dc3caa0"
  },
  {
    "id": "technology-2",
    "name": "Cloud Services Guide",
    "industry": "Technology",
    "industryGroup": "technology",
    "description": "Assist with cloud platform setup, migration, and management.",
    "image": "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    "assistantId": "6911e406-fe0d-48c7-9e7d-1892a3e14d60"
  },
  {
    "id": "technology-3",
    "name": "IT Helpdesk Assistant",
    "industry": "Technology",
    "industryGroup": "technology",
    "description": "Handle common IT support requests, password resets, and system status inquiries via voice.",
    "image": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    "assistantId": "5a97caf7-9759-4ce1-b177-63d33107fb66"
  },
  {
    "id": "media-1",
    "name": "Content Discovery and Recommendation Engine",
    "industry": "Media",
    "industryGroup": "media",
    "description": "Help users find movies, shows, music, or podcasts based on their preferences or requests made via voice.",
    "image": "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg",
    "assistantId": "d417dcf7-8882-4259-bedc-e013d65e886e"
  },
  {
    "id": "media-2",
    "name": "Streaming Support Guide",
    "industry": "Media",
    "industryGroup": "media",
    "description": "Assist with streaming platform setup, troubleshooting, and content discovery.",
    "image": "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg",
    "assistantId": "c41bc8d3-583e-48fa-a8a5-e0f11ade8a0b"
  },
  {
    "id": "media-3",
    "name": "Basic Media Control",
    "industry": "Media",
    "industryGroup": "media",
    "description": "Allow users to control playback, volume, and navigate content libraries on various media platforms using voice commands.",
    "image": "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
    "assistantId": "446a7574-8162-4dd0-a2c9-fbdd2e7b1556"
  },
  {
    "id": "telecom-1",
    "name": "Telecommunications Support",
    "industry": "Telecom",
    "industryGroup": "telecom",
    "description": "Help customers troubleshoot connection issues, upgrade plans, and understand billing statements.",
    "image": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    "assistantId": "05a27caa-0f5e-4c9f-be41-f0e3e1739787"
  },
  {
    "id": "telecom-2",
    "name": "Network Setup Guide",
    "industry": "Telecom",
    "industryGroup": "telecom",
    "description": "Assist with network configuration, device setup, and connectivity optimization.",
    "image": "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
    "assistantId": "cfad8f41-5909-4b67-ad1e-b4e4363015a7"
  },
  {
    "id": "telecom-3",
    "name": "Service Migration Assistant",
    "industry": "Telecom",
    "industryGroup": "telecom",
    "description": "Guide customers through service transfers, upgrades, and account migrations.",
    "image": "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
    "assistantId": "57bf4424-3e10-4ee6-a4f3-684e5e990338"
  },
  {
    "id": "public-sector-1",
    "name": "Citizen Services Assistant",
    "industry": "Public Sector",
    "industryGroup": "public-sector",
    "description": "Help citizens access government services, submit applications, and get information about public programs.",
    "image": "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    "assistantId": "a4fa3c3f-6aab-4ce3-982e-2a2a27f798be"
  },
  {
    "id": "public-sector-2",
    "name": "Public Transportation Guide",
    "industry": "Public Sector",
    "industryGroup": "public-sector",
    "description": "Assist with transit schedules, route planning, and transportation services.",
    "image": "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg",
    "assistantId": "d5c91b5e-9bff-4f91-a5d3-49d63ed69301"
  },
  {
    "id": "public-sector-3",
    "name": "Automated Information Line for Public Services",
    "industry": "Public Sector",
    "industryGroup": "public-sector",
    "description": "Provide citizens with easily accessible information on routine public service topics via voice.",
    "image": "https://images.pexels.com/photos/1634213/pexels-photo-1634213.jpeg",
    "assistantId": "48896324-0670-4499-b259-0253f3090390"
  }
];