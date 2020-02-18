#RI Web Branching Strategy
#
#
![alt text](https://github.com/rockimmortal/riweb/blob/master/riweb-branching.png?raw=true "branching")

1. Master remains as a "last known good state". Master should essentially just be disaster recovery and a reference for dev branch.
2. A dev is cloned off master. Dev should always be a 1:1 of master and not worked against.
3. A sprint/feature branch is created off of a dev branch.
4. Individual contributors will create private branches off of the feature branch and submit PR's when finished to merge them into the sprint/feature branch they're working on. Contributor branches should never be made off of dev and should always merge into the sprint/feature branch, not the release branch.
5. The release branch is created off of any number of sprint/feature branches.
6. Prod is our production environment and release is merged into it.
7. Once stability is confirmed, prod is cloned to master as the new "last known good".
