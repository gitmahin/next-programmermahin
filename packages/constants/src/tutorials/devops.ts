import { TutorialNavItemType } from "@programmer/types";

export const DEVOPS_TUTORIALS: TutorialNavItemType = {
  // "Introduction to DevOps": {
  //   slug: "introduction-to-devops",
  //   items: [
  //     {
  //       label: "What is DevOps?",
  //       slug: "what-is-devops",
  //     },
  //     {
  //       label: "DevOps vs traditional SDLC",
  //       slug: "devops-vs-traditional-sdlc",
  //     },
  //     {
  //       label: "Key DevOps principle",
  //       slug: "key-devops-principles",
  //     },
  //   ],
  // },
  "Linux & Bash Scripting": {
    slug: "linux-and-bash-scripting",
    
    items: [
      {
        label: "Absolute & Relative Paths",
        slug: "absolute-and-relative-paths"
      },
      {
        label: "Get Started With Bash",
        slug: "get-started-with-bash",
      },
      {
        label: "Bash Basic commands",
        slug: "bash-basic-commands",
      },
      {
        dirItems: {
          "Bash File Handling": {
            slug: "bash-file-handling",
            items: [
              {
                label: "Bash Create Files (touch)",
                slug: "bash-create-files"
              }, {
                label: "Bash Make Directory (mkdir)",
                slug: "bash-make-directory"
              }, {
                label: "Bash Concatenate (cat)",
                slug: "bash-concatenate"
              }, {
                label: "Copy, Move & Remove",
                slug: "bash-copy-move-remove"
              }, {
                label: "Bash File Compression",
                slug: "bash-file-compression"
              }
            ]
          }
        }
      },
      {
        dirItems: {
          "Bash Text Processing": {
            slug: "bash-text-processing",
            items: [
              {
                label: "Bash Search Text (grep)",
                slug: "bash-search-text"
              },
              {
                label: "Bash Pattern Scan (awk)",
                slug: "bash-pattern-scan"
              },
              {
                label: "Bash Stream Editor (sed)",
                slug: "bash-stream-editor"
              },
              {
                label: "Bash Remove Section (cut)",
                slug: "bash-remove-section"
              }
            ]
          }
        }
      },
      {
        label: "System Monitoring",
        slug: "system-monitoring"
      },
      {
        dirItems: {
          "Bash Networking": {
            slug: "bash-networking",
            items: [
              {
                label: "ping, curl & wget",
                slug: "bash-ping-curl-wget"
              },
              {
                label: "Bash Remote Connect ssh",
                slug: "bash-remote-connect-ssh"
              }
            ]
          }
        }
      },
      {
        label: "File Permissions",
        slug: "file-permissions-in-linux"
      },
      {
        dirItems: {
          "Bash Scripting": {
            slug: "bash-scripting",
            items: [
              {
                label: "Getting Started",
                slug: "getting-started-with-bash-scripting"
              },
              {
                label: "Variables & Data Types",
                slug: "variables-and-data-types"
              },
              {
                label: "Operators In Bash",
                slug: "bash-operators"
              },
              {
                label: "Conditional Statements",
                slug: "conditional-statements"
              },
              {
                label: "Loops In Bash",
                slug: "loops-in-bash"
              },
              {
                label: "Functions In Bash",
                slug: "functions-in-bash"
              }
            ]
          }
        }
      }
    ],
  
  },
  // "Networking Basics": {
  //   slug: "networking-basics",

  //   items: [
  //     {
  //       label: "IP, DNS, HTTP/S, ports",
  //       slug: "networking-ip-dns-http-ports",
  //     },
  //     {
  //       label: "Firewall, load balancers, proxies",
  //       slug: "networking-firewall-loadbalancer-proxy",
  //     },
  //     {
  //       label: "Public vs private networks",
  //       slug: "networking-public-vs-private",
  //     },
      
  //   ],
  // },
  // Kubernetes: {
  //   slug: "kubernetes",
  //   items: [
  //     {
  //       dirItems: {
  //         "K8s Main Components": {
  //           slug: "k8s-main-components",
  //           items: [
  //             {
  //               label: "K8s Pod",
  //               slug: "k8s-pod",
  //             },
  //             {
  //               label: "K8s-service",
  //               slug: "k8s-service",
  //             },
  //             {
  //               label: "K8s Ingress",
  //               slug: "k8s-ingress",
  //             },
  //             {
  //               label: "ConfigMap & Secrets",
  //               slug: "k8s-configmap-secrets",
  //             },
  //             {
  //               label: "K8s Volumes",
  //               slug: "k8s-volumes",
  //             },
  //             {
  //               label: "K8s Deployments",
  //               slug: "k8s-deployments",
  //             },
  //             {
  //               label: "K8s StatefulSets & StateLess",
  //               slug: "k8s-statefulsets-and-stateless",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     {
  //       dirItems: {
  //         "K8s Architecture": {
  //           slug: "k8s-architecture",
  //           items: [
  //             {
  //               label: "K8s Cluster",
  //               slug: "k8s-cluster",
  //             },
  //             {
  //               label: "Master Node",
  //               slug: "k8s-master-node",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     {
  //       label: "K8s Services",
  //       slug: "k8s-services",
  //     },
  //   ],
  // },
};
