package io.growbymastery.ppmtool.web;

import io.growbymastery.ppmtool.domain.Project;
import io.growbymastery.ppmtool.services.MapValidationErrorService;
import io.growbymastery.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;


@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult bindingResult){
        //check the validations
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(bindingResult);
        if(errorMap != null) return errorMap;

        //Project projectH2 = projectService.saveOrUpdateProject(project); -- data for H2 db
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }
}
