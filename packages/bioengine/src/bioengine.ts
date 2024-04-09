/*
 * Bioengine interface for use in podman-desktop
 */

// const kubernetes_yaml_file = "./test_path.yaml";
const kubernetes_yaml_file = "/home/jeremy/projects/bioengine-desktop/bioengine.yaml";
// const provider = "podman";


export type BioEngineStatus =
  | 'not-installed'
  | 'installed'
  | 'ready'
  | 'started'
  | 'stopped'
  | 'starting'
  | 'stopping'
  | 'error'
  | 'unknown';


export class BioEngine{



  async start(provider){

    console.debug("Starting bioengine...");
    console.debug("Provider:")
    console.debug(provider);
    console.debug("Yaml file:");
    console.debug(kubernetes_yaml_file)
    try{
      const result = await window.playKube(kubernetes_yaml_file, provider);
      return result;
    }catch(err){
      console.error("Failed to start BioEngine");
      console.error(err);
    }
  }

  stop(): void{
    console.debug("Stopping bioengine...");
  }

  get_status(): BioEngineStatus{
    return "installed"
  }
}
