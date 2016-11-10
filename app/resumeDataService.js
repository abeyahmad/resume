(function() {
    'use strict';

    angular
        .module('resume')
        .factory('resumeDataService', resumeDataService);

    /* @ngInject */
    function resumeDataService() {
        var service = {
            resume: resume
        };

        return service;

        function resume() {
            return {
                "basics": {
                    "name": "Abey Ahmad",
                    "title": "ServiceNow Architect",
                    "email": "abey@elucent.io",
                    "phone": "(571) 218-0978",
                    "location": {
                        "address": "641 S St NW",
                        "postalCode": "DC 20009",
                        "city": "Washington",
                        "countryCode": "US",
                        "region": "District of Columbia"
                    },
                    "profiles": [{
                        "network": "GitHub",
                        "url": "https://github.com/abeyahmad"
                    },{
                        "network": "LinkedIn",
                        "url": "https://www.linkedin.com/in/abey-ahmad-a267b831"
                    }]
                },
                "engagements": [{
                    "client": "Halyard Health",
                    "industry": "Medical Devices",
                    "role": "Integration Consultant",
                    "subcontract": ["ServiceNow Professional Services", "GlideFast"],
                    "projects": [{
                        "title": "HP Service Manager Integration",
                        "bullets": [
                            "Bi-directional integration to sync change records",
                            ""
                        ]
                    }]
                }, {
                    "client": "Memorial Healthcare Systems",
                    "industry": "Healthcare",
                    "role": "Integration Consultant",
                    "subcontract": ["ServiceNow Professional Services", "GlideFast"],
                    "projects": [{
                        "title": "Service Portal",
                        "bullets": ["Implemented the Knowledge Base portion Service Portal",
                            "Developed new SP widgets"
                        ]
                    }, {
                        "title": "Scripted REST API",
                        "bullets": [
                            "Created scripted REST API to automated request generation"
                        ]
                    }, {
                        "title": "SSO Configuration",
                        "bullets": ["Reconfigured to use the multi-provider SSO plugin"]
                    }]
                }, {
                    "client": "Government of Manitoba",
                    "role": "Integration Consultant",
                    "subcontract": ["ServiceNow Professional Services", "GlideFast"],
                    "projects": [{
                        "title": "1e Shopping Integration",
                        "bullets": [
                            "Developed 2 way communication between 1e Shopping and ServiceNow",
                            "Created Scripted REST API to automatically generate requests from 1e Shopping",
                            "Developed dynamic workflow to handle 1e shopping provisioning steps"
                        ]
                    }]
                }, {
                    "client": "Allergan",
                    "industry": "Pharmaceuticals",
                    "role": "Integration Consultant",
                    "subcontract": ["Cerna", "GlideFast"],
                    "projects": [{
                        "title": "Workday Integration",
                        "bullets": [
                            "Used the Workday Human Resources API to import 50,000+ users",
                            "Developed integration libraries to pull in locations, organizations and worker transactions",
                            "Developed business rules to fire onboarding/offboarding requests based on user transactions",
                            "Created scheduled jobs to regularly import users"
                        ]
                    }, {
                        "title": "Service Portal",
                        "bullets": [
                            "Developed modal widget to display Knowledge articles in Service Catalog items",
                            "Modified ticket page widget to prevent the end user from seeing the agents name"
                        ]
                    }]
                }, {
                    "client": "Asbury",
                    "subcontract": ['XA Systems'],
                    "industry": "Healthcare",
                    "role": "ServiceNow Architect",
                    "projects": [{
                        "title": "Service Catalog",
                        "bullets": [
                            "Created 1900+ Catalog Items in 300+ categories across 12 catalogs",
                            "Provided knowledge on request automation"
                        ]
                    }, {
                        "title": "Incident Management",
                        "bullets": [
                            "Developed business rules to populate data",
                            "Provided guidance on best practices"
                        ]
                    }]
                }, {
                    "client": "Premier Inc.",
                    "industry": "Healthcare",
                    "role": "ServiceNow Consultant",
                    "subcontract": ["ServiceNow Professional Services", "GlideFast"],
                    "projects": [{
                        "title": "Upgrade from Dublin to Helsinki",
                        "bullets": [
                            "Analyzed and handled over 300 skipped upgrade records",
                            "Tested functionality and developed fixes"
                        ]
                    }, {
                        "title": "CMS Upgrade",
                        "bullets": [
                            "Fixed CSS for DOM changes due to upgrade",
                            "Added search functionality"

                        ]
                    }]
                }, {
                    "client": "Neustar",
                    "role": "Solutions Architect",
                    "projects": [{
                        "title": "Twilio Integration",
                        "bullets": []
                    }, {
                        "title": "PDF Generator",
                        "bullets": [

                        ]
                    }, {
                        "title": "Custom Applications",
                        "bullets": [

                        ]
                    }, {
                        "title": "Discovery/CMDB",
                        "bullets": [

                        ]
                    }, {
                        "title": "Upgrade from Dublin to Geneva",
                        "bullets": [

                        ]
                    }, {
                        "title": "Upgrade from Geneva to Helsinki",
                        "bullets": [

                        ]
                    }]
                }, {
                    "client": "Kemtah",
                    "role": "ServiceNow Developer",
                    "industry": "Data Analytics",
                    "projects": [{
                        "title": "Corporate Implementation",
                        "bullets": [
                            "Implemented integration with LDAP/SSO",
                            "Developed integration with DC Metro API",
                            "Worked in the Agile Development Framework"
                        ]
                    }]
                }, {
                    "client": "Lawrence Livermore Nat. Lab",
                    "role": "ServiceNow Consultant",
                    "projects": [{
                        "title": "Product Catalog",
                        "bullets": [
                            "Deployed their Product Catalog for cellphone provisioning",
                            "Designed and implemented the change management process for Security team",
                            "Developed integration to send all logs to Syslog Server"

                        ]
                    }, {
                        "title": "Change Management for Security",
                        "bullets": [
                            "Deployed their Product Catalog for cellphone provisioning",
                            "Designed and implemented the change management process for Security team"

                        ]
                    }, {
                        "title": "Syslog Integration",
                        "bullets": []
                    }]
                }, {
                    "client": "Argonne National Laboratory",
                    "role": "ServiceNow Consultant",
                    "projects": [{
                        "title": "Engagement",
                        "bullets": [
                            "Performed root cause analysis of failed upgrade",
                            "Redesigned the Change Management process implementing best practices",
                            "Developed Service Catalog items"
                        ]
                    }]
                }, {
                    "client": "Cvent",
                    "role": "Internet Operations Engineer",
                    "projects": [{
                        "title": "Incident Management",
                        "bullets": [

                        ]
                    }, {
                        "title": "Change Management",
                        "bullets": [

                        ]
                    }, {
                        "title": "Upgrade from Dublin to Eureka",
                        "bullets": [

                        ]
                    }]
                }],

                "skills": [{
                    "name": "Web Development",
                    "level": "Master",
                    "keywords": [
                        "HTML",
                        "CSS",
                        "Javascript"
                    ]
                }],
                "interests": [{
                    "name": "Wildlife",
                    "keywords": [
                        "Ferrets",
                        "Unicorns"
                    ]
                }],

            }

        }
    }
})();
