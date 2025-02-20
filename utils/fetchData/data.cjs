const categories = {
    "Incident Response": [
        "incident",
        "response",
        "forensics",
        "dfir",
        "investigation",
        "triage",
        "analysis",
        "compromise",
        "breach",
        "threat"
    ],
    "S3 Auditing": [
        "s3",
        "bucket",
        "permissions",
        "auditing",
        "storage",
        "object",
        "access",
        "aws s3",
        "buckets"
    ],
    "Compliance": [
        "compliance",
        "security",
        "cis",
        "pci",
        "frameworks",
        "benchmark",
        "governance",
        "regulations",
        "standards",
        "audit",
        "policy"
    ],
    "IAM Tools": [
        "iam",
        "identity",
        "role",
        "permissions",
        "policy",
        "users",
        "groups",
        "access",
        "authentication",
        "authorization"
    ],
    "Cloud Monitoring": [
        "monitoring",
        "alerts",
        "metrics",
        "logs",
        "cloudwatch",
        "activity",
        "dashboard",
        "tracking",
        "notification",
        "telemetry",
        "analytics"
    ],
    "Static Analysis": [
        "scan",
        "checkov",
        "analysis",
        "terraform",
        "cloudformation",
        "configuration",
        "vulnerability",
        "misconfiguration",
        "static",
        "lint",
        "inspection"
    ],
    "Secrets Management": [
        "secret",
        "keys",
        "token",
        "vault",
        "credential",
        "encryption",
        "key rotation",
        "secrets",
        "leaks",
        "passwords"
    ],
    "Cloud Infrastructure": [
        "infrastructure",
        "provisioning",
        "terraform",
        "cloudformation",
        "deployment",
        "automation",
        "iaas",
        "orchestration",
        "infrastructure-as-code"
    ],
    "Threat Detection": [
        "threat",
        "detection",
        "malware",
        "abuse",
        "anomaly",
        "attack",
        "red team",
        "recon",
        "security monitoring",
        "exploitation"
    ],
    "Data Security": [
        "data",
        "encryption",
        "storage",
        "leakage",
        "detection",
        "security",
        "classification",
        "sensitive",
        "backup",
        "protection"
    ],
    "Penetration Testing": [
        "pentest",
        "testing",
        "exploitation",
        "red team",
        "recon",
        "simulation",
        "ethical hacking",
        "vulnerabilities",
        "attack",
        "audit"
    ],
    "Container Security": [
        "container",
        "docker",
        "kubernetes",
        "orchestration",
        "image scanning",
        "runtime",
        "containerization",
        "pod",
        "cluster",
        "microservices"
    ],
    "Serverless Security": [
        "serverless",
        "lambda",
        "faas",
        "cloud functions",
        "event-driven",
        "runtime security",
        "functions",
        "aws lambda",
        "api gateway",
        "trigger"
    ],
    "Cloud Cost Management": [
        "cost",
        "optimization",
        "billing",
        "savings",
        "usage",
        "resources",
        "expenses",
        "accounting",
        "spend",
        "estimation"
    ],
    "Policy Management": [
        "policy",
        "rules",
        "compliance",
        "configuration",
        "benchmark",
        "security group",
        "firewall",
        "permissions",
        "policy enforcement",
        "controls"
    ],
    "API Security": [
        "api",
        "gateway",
        "rest",
        "web services",
        "soap",
        "authentication",
        "authorization",
        "api calls",
        "throttling",
        "rate limiting"
    ]
    };

const repos = [
    '0xsha/cloudbrute',
    '99designs/aws-vault',
    'aaparmeggiani/s3find',
    'abhn/S3Scan',
    'adanalvarez/HoneyTrail',
    'adanalvarez/TrailDiscover',
    'airbnb/streamalert',
    'aletheia/iam-policy-generator',
    'anaynayak/aws-security-viz',
    'andresriancho/enumerate-iam',
    'andresriancho/nimbostratus',
    'anirudhbiyani/findmytakeover',
    'Aqua-Nautilus/TrailShark',
    'aquasecurity/trivy',
    'aquia-inc/scpkit',
    'arkadiyt/aws_public_ips',
    'Atticuss/bucketcat',
    'aws-cloudformation/cloudformation-guard',
    'aws-samples/automated-security-helper',
    'aws/aws-imds-packet-analyzer',
    'aws/aws-secretsmanager-agent',
    'awslabs/amazon-guardduty-tester',
    'awslabs/coldsnap',
    'awslabs/sustainability-scanner',
    'awslabs/threat-composer',
    'Azure/dalec',
    'Azure/Stormspotter',
    'bear/s3scan',
    'benkehoe/aws-whoami-golang',
    'BishopFox/cloudfox',
    'bishopfox/dufflebag',
    'boostsecurityio/poutine',
    'brianwarehime/inSp3ctor',
    'bridgecrewio/AirIAM',
    'bridgecrewio/checkov',
    'bridgecrewio/yor',
    'btkrausen/AWS',
    'c6fc/npk',
    'canonical/cloud-init',
    'carnal0wnage/weirdAAL',
    'CCob/okta-terrify',
    'cesar-rodriguez/terrascan',
    'Checkmarx/kics',
    'cjsrkd3321/aws-security-architectures',
    'cloud-copilot/iam-expand',
    'cloud-copilot/iam-simulate',
    'cloud-custodian/cloud-custodian',
    'cloudquery/cloudquery',
    'cloudsploit/scans',
    'clutchsecurity/federator',
    'controlplaneio/simulator',
    'cr0hn/festin',
    'cyberark/SkyArk',
    'cyberark/SkyWrapper',
    'cycloidio/terracognita',
    'dagrz/aws_pwn',
    'damienjburks/DataCop',
    'datadog/grimoire',
    'datadog/guarddog',
    'datadog/stratus-red-team',
    'deepfence/threatmapper',
    'DenizParlak/Zeus',
    'disruptops/cred_scanner',
    'disruptops/resource-counter',
    'domain-protect/domain-protect-gcp',
    'dowjones/hammer',
    'duo-labs/cloudmapper',
    'duo-labs/cloudtracker',
    'duo-labs/cloudtrail-partitioner',
    'duo-labs/parliament',
    'dxa4481/truffleHog',
    'edera-dev/am-i-isolated',
    'eerkunt/terraform-compliance',
    'ekristen/aws-nuke',
    'elastic/dorothy',
    'elitest/Redboto',
    'endgameinc/aws-logsearch',
    'endgameinc/varna',
    'ermetic/access-undenied-aws',
    'eth0izzle/bucket-stream',
    'evild3ad/Microsoft-Analyzer-Suite',
    'facebookincubator/TTPForge',
    'falcosecurity/falco',
    'FishermansEnemy/bucket_finder',
    'flosell/trailscraper',
    'fsecurelabs/awspx',
    'fsecurelabs/leonidas',
    'fugue/regula',
    'gabrielsoltz/metahub',
    'gladstomych/AHHHZURE',
    'goldfiglabs/rpCheckup',
    'google/trillian',
    'GoogleCloudPlatform/assured-workloads-terraform',
    'gruntwork-io/cloud-nuke',
    'gwen001/s3-buckets-finder',
    'hac01/gcp-iam-brute',
    'HarshVaragiya/aws-redteam-kit',
    'hazardsec/cx-scan',
    'hotnops/apeman',
    'iann0036/iamlive',
    'iknowjason/PurpleCloud',
    'infrahouse/terraform-aws-secret',
    'janiko71/aws-inventory',
    'jonrau1/AWS-ComplianceMachineDontStop',
    'jonrau1/ElectricEye',
    'jonrau1/SyntheticSun',
    'jordanpotti/AWSBucketDump',
    'KatTraxler/gcpdocs',
    'kurmiashish/S3Insights',
    'lateralblast/lunar',
    'lirlia/prel',
    'luminaut-org/luminaut',
    'lyft/cartography',
    'maester365/maester',
    'matthewdfuller/safer-scps',
    'mchaffe/cloudprefixes',
    'mchmarny/s3cme',
    'messypoutine/gravy-overflow',
    'mindpointgroup/cloudfrunt',
    'mlabouardy/komiser',
    'mozilla-services/pytest-services',
    'mozilla/MozDef',
    'mozilla/ssm-acquire',
    'MrSecure/review-security-groups',
    'n0jam/gcp-ctf-workshop',
    'nahamsec/lazys3',
    'nccgroup/aws-inventory',
    'nccgroup/PMapper',
    'nccgroup/s3_objects_check',
    'nccgroup/ScoutSuite',
    'nccgroup/SteppingStones',
    'Netflix-Skunkworks/aws-credential-compromise-detection',
    'Netflix/repokid',
    'Netflix/security_monkey',
    'NetSPI/gcpwn',
    'nianticlabs/venator',
    'nozaq/terraform-aws-secure-baseline',
    'nullenc0de/servicelens',
    'octo-sts/app',
    'offensive-actions/azure-storage-reverse-shell',
    'okigan/awscurl',
    'open-policy-agent/gatekeeper-library',
    'openai/openai-security-bots',
    'orcasecurity-research/kte',
    'ovotech/cloud-key-rotator',
    'padok-team/cognito-scanner',
    'PaperMtn/slack-watchman',
    'Permiso-io-tools/azure-activity-log-axe',
    'Permiso-io-tools/Bucket-Shield',
    'Permiso-io-tools/CloudConsoleCartographer',
    'Permiso-io-tools/CloudGrappler',
    'Permiso-io-tools/cloudtail',
    'Permiso-io-tools/SkyScalpel',
    'planetscale/cloudranger',
    'prevade/cloudjack',
    'primait/nuvola',
    'primeharbor/pht-securityhub-management',
    'prisma-cloud/IAMFinder',
    'projectdiscovery/cdncheck',
    'prowler-cloud/prowler',
    'pumasecurity/nymeria',
    'pumasecurity/serverless-prey',
    'puresec/lambda-proxy',
    'puresec/serverless-puresec-cli',
    'rdkls/tf-parliament',
    'RhinoSecurityLabs/ccat',
    'RhinoSecurityLabs/pacu',
    'RichardoC/gitlab-secrets',
    'RiotGames/cloud-inquisitor',
    'robburger/terraform-pr-commenter',
    'runfinch/finch',
    'salesforce/aws-allowlister',
    'salesforce/cloudsplaining',
    'salesforce/policy_sentry',
    'SanderKnape/assume',
    'SAP/cloud-active-defense',
    'saw-your-packet/CloudShovel',
    'securing/BucketScanner',
    'securing/DumpsterDiver',
    'SecurityRunners/CloudCommotion',
    'seisvelas/S3-Exif-Cleaner',
    'sendgrid/krampus',
    'siigil/entra-id-terraform',
    'silascutler/dockerhoneypot-logs',
    'skyscanner/cfripper',
    'skyscanner/whispers',
    'smiegles/mass3',
    'soteria-security/365Inspect',
    'soteria-security/AzureInspect',
    'splunk/attack_range',
    'spotify/gcp-aws-iam-federation-webidentity',
    'ssup2/kpexec',
    'static-flow/CloudCopy',
    'Stelligent/cfn_nag',
    'StevenSmiley/aws-mine',
    'suzuki-shunsuke/tfprovidercheck',
    'SygniaLabs/Cirrus',
    'SySS-Research/azurenum',
    'tensult/cloud-reports',
    'threatcl/threatcl',
    'ThreatResponse/aws_ir',
    'ThreatResponse/mad-king',
    'tmobile/pacbot',
    'tomdev/teh_s3_bucketeers',
    'turbot/steampipe',
    'turnerlabs/antiope',
    'Ucnt/aws-s3-data-finder',
    'udondan/iam-floyd',
    'unknownhad/CloudIntel',
    'vectra-ai-research/derf',
    'vectra-ai-research/Halberd',
    'VirtueSecurity/aws-extender-cli',
    'Voulnet/barq',
    'welldone-cloud/aws-lint-iam-policies',
    'welldone-cloud/aws-list-resources',
    'welldone-cloud/aws-scps-for-sandbox-and-training-accounts',
    'welldone-cloud/aws-summarize-account-activity',
    'whitfin/s3-meta',
    'whitfin/s3-utils',
    'widdix/aws-amicleaner',
    'willbengtson/trailblazer-aws',
    'WithSecureLabs/cloud-security-vm',
    'WithSecureLabs/IAMSpy',
    'xen0l/aws-gate',
    'xen0l/iam-lint',
    'yanilov/control-tags',
    'yelp/detect-secrets',
    'z0ph/aws-security-toolbox',
    'zricethezav/gitleaks',
  ];
  
  module.exports = { repos, categories };
