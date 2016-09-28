jQuery.githubUser = function(username, callback) {
    jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}

jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
    
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
        sortByName(repos); 

        // list of repositories to show on the site
        var listOfRepos = ["nodepy", "nonlinear-waves-course", "SSP_Tools", "numerical-mooc", "HeterogenousComputing"];
        
        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function() {
            //if (this.name == ('nodepy') || this.name == ("nonlinear-waves-course") || this.name == ("SSP_Tools")) {
            if (~listOfRepos.indexOf(this.name)) {
                list.append('<dt><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a> <em>'+(this.language?('('+this.language+')'):'')+'</em></dt>');
            list.append('<dd> Description: ' + this.description + '</dd>');
           // list.append('<dd> Created: ' + this.created_at + '</dd>');
            list.append('<dd> Watchers: ' + this.watchers_count + '</dd>');
            //list.append('<dd> Size: ' + this.size + '</dd>');
            list.append('<dd> Open Issues: ' + this.open_issues + '</dd>');
            list.append('<dd> Open Issues Count: ' + this.open_issues_count + '</dd>');
            //list.append('<dd> Last Updated: ' + this.updated_at + '</dd>');
            list.append('<dd> Stars: ' + this.stargazers_count + '</dd>');
            list.append('<dd> Forks: ' + this.forks_count + '</dd>');
            }
        });
    });
    
    function sortByName(repos) {
        repos.sort(function(a,b) {
            return a.name - b.name;
        });
    }
};
