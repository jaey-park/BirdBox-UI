<template>
  <v-navigation-drawer v-model="toggle" fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Home' }">
        <img src="static/birdbox.png" :width="toolbarHeight" />
      </router-link>
      <router-link :to="{ name: 'Home' }" class="text">BirdBox</router-link>
    </v-toolbar>

    <v-card class="list-card" :height="listCardHeight" elevation="0">
      <v-list>
        <v-list-tile @click="changeRoute('Home', 1)">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 1 }, 'item-title']"
            >Home</v-list-tile-title
          >
        </v-list-tile>
        <v-divider />

        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>fas fa-chart-area</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">Dashboard</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="changeRoute('ResourceDashboard', 50)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 50 }, 'item-title']"
              >Computing Resource Count</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('SecurityGroupDashboard', 51)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 51 }, 'item-title']"
              >Risky Security Group Dashboard</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('UnusedCredentialDashboard', 52)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 52 }, 'item-title']"
              >Unused Credential Dashboard</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('UnusedElasticIPDashBoard', 53)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{active : selectedIndex === 53 }, 'item-title']"
            >Unused Elastic IP Dashboard</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('AwsConfigStatusDashboard', 54)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 54 }, 'item-title']"
              >AWS Config Status</v-list-tile-title
            >
          </v-list-tile>
          
          <v-list-tile @click="changeRoute('AwsQuotaDashboard', 55)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{active : selectedIndex === 55 }, 'item-title']"
            >AWS Quota Dashboard</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('WasConfigCheckDashboard', 56)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{active : selectedIndex === 56 }, 'item-title']"
            >WAS Config Check Dashboard</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('DBCmsConfigCheckDashboard', 61)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{active : selectedIndex === 61 }, 'item-title']"
            >DB CMS Config Check Dashboard</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('DBParameterCheckDashboard', 62)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{active : selectedIndex === 62 }, 'item-title']"
            >DB Parameter Check Dashboard</v-list-tile-title
            >
          </v-list-tile>
          
          
        </v-list-group>

        <v-list-tile @click="changeRoute('SystemDashboard', 60)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 60 }, 'item-title']"
              >Customer Service</v-list-tile-title
            >
        </v-list-tile>

        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>fas fa-history</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">Backup Status</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="changeRoute('DailyBackupSummeryDashBoard', 73)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 73 }, 'item-title']"
              >Daily Backup Summary</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('AwsBackupStatusDashBoard', 70)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 70 }, 'item-title']"
              >AWS Backup Status</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('GcpBackupStatusDashBoard', 71)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 71 }, 'item-title']"
              >GCP Backup Status</v-list-tile-title
            >
          </v-list-tile>

          <v-list-tile @click="changeRoute('AzureBackupStatusDashBoard', 72)">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === 72 }, 'item-title']"
              >Azure Backup Status</v-list-tile-title
            >
          </v-list-tile>

        </v-list-group>

        <v-divider />

        <v-list-tile @click="changeRoute('Encloud', 2)">
          <v-list-tile-action>
            <v-icon>cloud</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 2 }, 'item-title']"
            >Encloud</v-list-tile-title
          >
        </v-list-tile>

        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>fab fa-aws</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">AWS</v-list-tile-title>
          </v-list-tile>
          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>computer</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 3 }, 'item-title']"
                  >Compute</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('Aws', 3)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 3 }, 'item-title']"
                  >EC2</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsAmi', 5)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 5 }, 'item-title']"
                  >AMI</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsLambda', 6)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 6 }, 'item-title']"
                  >Lambda</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsBatch', 31)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 31 }, 'item-title']"
                  >Batch</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <!-- <i class="fab fa-aws"></i> -->
                  <v-icon>fas fa-wifi</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 7 }, 'item-title']"
                  >Network</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('AwsVpc', 7)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 7 }, 'item-title']"
                  >VPC</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsSubnet', 8)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 8 }, 'item-title']"
                  >Subnet</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsSecurityGroup', 9)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 9 }, 'item-title']"
                  >Security Group</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsLoadBalancer', 10)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 10 }, 'item-title']"
                  >Load Balancer</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsRoute53', 29)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 29 }, 'item-title']"
                  >Route 53</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsApiGateway', 30)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 30 }, 'item-title']"
                  >API Gateway</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <!-- <i class="fab fa-aws"></i> -->
                  <v-icon>fas fa-shield-alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 33 }, 'item-title']"
                  >Security</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('AwsAcm', 33)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 33 }, 'item-title']"
                  >Certificate Manager</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 36 }, 'item-title']"
                  >IAM</v-list-tile-title
                >
                <v-list-tile-action class="sub-item">
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <v-list :class="['item-title-2']">
              <v-list-tile @click="changeRoute('AwsIamGroup', 34)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 34 }, 'item-title-3']"
                  >Group</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
            <v-list :class="['item-title-2']">
              <v-list-tile @click="changeRoute('AwsIamUser', 35)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 35 }, 'item-title-3']"
                  >User</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
            <v-list :class="['item-title-2']">
              <v-list-tile @click="changeRoute('AwsIamRole', 41)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 41 }, 'item-title-3']"
                  >Role</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <!-- <i class="fab fa-aws"></i> -->
                  <v-icon>fas fa-database</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 11 }, 'item-title']"
                  >Database</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('AwsRds', 11)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 11 }, 'item-title']"
                  >RDS</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsCache', 12)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 12 }, 'item-title']"
                  >ElastiCache</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <!-- <i class="fab fa-aws"></i> -->
                  <v-icon>directions_boat</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 13 }, 'item-title']"
                  >Container</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('AwsEcs', 13)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 13 }, 'item-title']"
                  >ECS</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsEks', 14)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 14 }, 'item-title']"
                  >EKS</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsEcr', 15)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 15 }, 'item-title']"
                  >ECR</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>fas fa-tools</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 16 }, 'item-title']"
                  >Dev Tools</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <!-- <v-list-tile @click="changeRoute('AwsCodes', 16)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 16 }, 'item-title']"
                  >CodeCommit</v-list-tile-title
                >
              </v-list-tile> -->
              <v-list-tile @click="changeRoute('AwsCodeBuild', 17)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 17 }, 'item-title']"
                  >CodeBuild</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsCodeDeploy', 18)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 18 }, 'item-title']"
                  >CodeDeploy</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsStepFunctions', 29)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 29 }, 'item-title']"
                  >StepFunctions</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>fas fa-clone</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 37 }, 'item-title']"
                  >Backup</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('AwsBackupRecoveryPoint', 38)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 38 }, 'item-title']"
                  >Recovery Point</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsBackupVault', 39)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 39 }, 'item-title']"
                  >Vault</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('AwsBackupPlan', 40)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 40 }, 'item-title']"
                  >Plan</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu 
            :nudge-width="20"
            offset-x
          >
            <template v-slot:activator="{ on }">
                <v-list-tile class="sub-item" v-on="on">
                  <v-list-tile-action>
                    <v-icon>fab fa-bitbucket</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title
                    :class="[{ active: selectedIndex === 37}, 'item-title']"
                    >Storage</v-list-tile-title
                  >
                  <v-list-tile-action class="sub-item">
                    >
                  </v-list-tile-action>
                </v-list-tile>
              </template>

              <v-list>  
                <v-list-tile @click="changeRoute('AwsEbs', 4)">
                  <v-list-tile-title
                    :class="[{ active: selectedIndex === 4 }, 'item-title']"
                    >EBS</v-list-tile-title
                  >
                </v-list-tile>
                  <v-list-tile @click="changeRoute('AwsS3', 38)">
                    <v-list-tile-title
                      :class="[{ active: selectedIndex === 38 }, 'item-title']"
                      >S3</v-list-tile-title
                    >
                </v-list-tile>
              </v-list>
          </v-menu>
          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile
                class="sub-item"
                v-on="on"
                @click="openWindow('https://calculator.aws/#/addService')"
              >
                <v-list-tile-action>
                  <v-icon>fas fa-calculator</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 36 }, 'item-title']"
                  >비용 계산기</v-list-tile-title
                >
                <v-list-tile-action class="sub-item">
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-menu>
        </v-list-group>


        <!-- Google Cloud -->
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <i class="fab fa-google"></i>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">Google Cloud</v-list-tile-title>
          </v-list-tile>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>computer</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 19 }, 'item-title']"
                  >Compute</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('GoogleComputeEngine', 19)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 19 }, 'item-title']"
                  >Compute Engine</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('GoogleAppEngine', 20)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 20 }, 'item-title']"
                  >App Engine</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('GoogleCloudFunctions', 21)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 21 }, 'item-title']"
                  >Function</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>fas fa-wifi</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 35 }, 'item-title']"
                  >Network</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('GoogleSubnetwork', 36)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 36 }, 'item-title']"
                  >Subnetwork</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('GoogleFirewall', 35)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 35 }, 'item-title']"
                  >Firewall</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('GoogleVpcNetworks', 42)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 42 }, 'item-title']"
                  >VPC networks</v-list-tile-title
                >
              </v-list-tile>
              </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <!-- <i class="fab fa-aws"></i> -->
                  <v-icon>fas fa-cloud-upload-alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 45 }, 'item-title']"
                  >BigData</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('GooglePubSub', 45)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 45 }, 'item-title']"
                  >Pub/Sub</v-list-tile-title
                >
              </v-list-tile>
              </v-list>
          </v-menu>
          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>fas fa-database</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 22 }, 'item-title']"
                  >Database</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('GoogleCloudStorage', 22)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 22 }, 'item-title']"
                  >Cloud Storage</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('GoogleBigtable', 23)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 23 }, 'item-title']"
                  >Bigtable</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('GoogleBigQuery', 24)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 24 }, 'item-title']"
                  >BigQuery</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('GoogleCloudSql', 25)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 25 }, 'item-title']"
                  >Cloud SQL</v-list-tile-title
                >
              </v-list-tile>
              <v-list-tile @click="changeRoute('GoogleMemorystore', 26)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 26 }, 'item-title']"
                  >Memorystore</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>directions_boat</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 19 }, 'item-title']"
                  >Container</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('GoogleKubernetesEngine', 43)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 43 }, 'item-title']"
                  >Kubernetes Engine</v-list-tile-title
                >
              </v-list-tile>
              <!-- <v-list-tile @click="changeRoute('GoogleKubernetesEngineNodePool', 52)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 52 }, 'item-title']"
                  >Node Pools</v-list-tile-title
                >
              </v-list-tile> -->
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>fas fa-file-invoice-dollar</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 32 }, 'item-title']"
                  >Billing</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('GoogleBilling', 32)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 32 }, 'item-title']"
                  >표준 빌링 태그 확인</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile
                class="sub-item"
                v-on="on"
                @click="
                  openWindow('https://cloud.google.com/products/calculator?hl=ko')
                "
              >
                <v-list-tile-action>
                  <v-icon>fas fa-calculator</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 36 }, 'item-title']"
                  >비용 계산기</v-list-tile-title
                >
                <v-list-tile-action class="sub-item">
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-menu>
        </v-list-group>

        <!-- Azure -->
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <i class="fab fa-microsoft"></i>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">Azure</v-list-tile-title>
          </v-list-tile>

          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>computer</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 30 }, 'item-title']"
                  >Compute</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('AzureVirtualMachines', 30)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 30 }, 'item-title']"
                  >Virtual Machines</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile class="sub-item" v-on="on">
                <v-list-tile-action>
                  <v-icon>fas fa-clone</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 30 }, 'item-title']"
                  >Backup</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile @click="changeRoute('AzureBackups', 30)">
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 30 }, 'item-title']"
                  >backup</v-list-tile-title
                >
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-menu :nudge-width="20" offset-x>
            <template v-slot:activator="{ on }">
              <v-list-tile
                class="sub-item"
                v-on="on"
                @click="
                  openWindow(
                    'https://azure.microsoft.com/ko-kr/pricing/calculator/'
                  )
                "
              >
                <v-list-tile-action>
                  <v-icon>fas fa-calculator</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === 35 }, 'item-title']"
                  >비용 계산기</v-list-tile-title
                >
                <v-list-tile-action class="sub-item">
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-menu>
        </v-list-group>

        <v-list-tile @click="changeRoute('TerraPortal', 24)">
          <v-list-tile-action>
            <v-icon>terrain</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 24 }, 'item-title']"
            >Terraform Portal</v-list-tile-title
          >
        </v-list-tile>

        <!-- <v-list-tile @click="changeRoute('Jmon', 25)">
          <v-list-tile-action>
            <v-icon>insert_chart_outlined</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 25 }, 'item-title']"
            >i-WMS</v-list-tile-title
          >
        </v-list-tile> -->

        <v-list-tile @click="changeRoute('CostCalculator', 126)">
          <v-list-tile-action>
            <v-icon>fas fa-calculator</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 126 }, 'item-title']"
            >Cost Calculator</v-list-tile-title
          >
        </v-list-tile>

        <!-- <v-list-tile @click="changeRoute('SystemAdministratorList', 27)">
          <v-list-tile-action>
            <v-icon>perm_contact_calendar</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 27 }, 'item-title']"
            >System Administrator</v-list-tile-title
          >
        </v-list-tile> -->

        <v-divider />

        <v-list-tile @click="changeRoute('MorningChecklist', 28)">
          <v-list-tile-action>
            <v-icon>event_available</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 28 }, 'item-title']"
            >Earlybird</v-list-tile-title
          >
          <!-- <v-list-tile-action class="sub-item">
            <v-icon>open_in_new</v-icon>
          </v-list-tile-action> -->
        </v-list-tile>

        <v-list-tile
          @click="openWindow('https://paperbird.opsinno.cloud/#/dashboard')"
        >
          <v-list-tile-action>
            <v-icon>fas fa-file-contract</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 29 }, 'item-title']"
            >Paperbird</v-list-tile-title
          >
          <v-list-tile-action class="sub-item">
            <v-icon>open_in_new</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider />

        <!-- <v-list-group prepend-icon="account_circle">
          <v-list-tile slot="activator">
            <v-list-tile-title class="item-title">Users</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="(admin, i) in admins" :key="i">
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
          </v-list-tile>
        </v-list-group> -->

        <v-list-tile @click="changeRoute('SystemAdministratorList', 27)">
          <v-list-tile-action>
            <v-icon>perm_contact_calendar</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 27 }, 'item-title']"
            >System Administrator</v-list-tile-title
          >
        </v-list-tile>
        
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <i class="fas fa-user-circle"></i>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">Users</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="(admin, i) in admins" :key="i">
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      selectedIndex: 1,
      admins: [
        ["Management", "people_outline"],
        ["Settings", "settings"],
      ],
      toolbarHeight: 50
    };
  },

  computed: {
    listCardHeight() {
      return window.innerHeight - this.toolbarHeight - 20
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    },
    openWindow(url) {
      window.open(url);
    },
  },
};
</script>

<style>
i {
  font-size: 22px;
}

.toolbar {
  font-weight: bold;
  font-size: 35px;
}

.toolbar img {
  vertical-align: middle;
}

.list-card {
  overflow-y: scroll;
}

.toolbar .text {
  padding-left: 15px;
  color: white;
  text-decoration: none;
}

.item-title {
  font-size: 15px;
  font-weight: 500;
}

.item-title-2 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.item-title-3 {
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
}

.item-sub-title {
  font-size: 15px;
  font-weight: 500;
}

.active {
  font-weight: bold;
}

.sub-item {
  padding-left: 3em;
}

.v-list__tile__title {
    height: 24px;
    line-height: 24px;
    position: relative;
    margin-left: 10px;
    text-align: left;
}

.v-list__tile__action, .v-list__tile__avatar {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: start;
    justify-content: center;
    min-width: 50px;

}
</style>
