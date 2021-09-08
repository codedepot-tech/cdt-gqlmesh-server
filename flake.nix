{
  description = "Code Depot's GraphQL Mesh Server";

  nixConfig.bash-prompt = "gql-mesh~~$ ";

  outputs = { self, nixpkgs }: {
    let
      gql-server = pkgs.mkYarnPackage {
        name = "cdt-gqlmesh-server";
        src = ./.;
        packageJSON = ./package.json;
        yarnLock = ./yarn.lock;
        yarnNix = ./yarn.nix;
      };
    in
    packages.x86_64-linux.cdt-gqlmesh-server = gql-server;

    defaultPackage.x86_64-linux = gql-server;

    devShell = pkgs.mkShell {
      buildInputs = [
        gql-server
      ];
      shellHook = ''
        echo ""
        echo "Welcome to CodeDepot's GraphQL Mesh Server"
        echo ""
      '';
    };

  };
}
