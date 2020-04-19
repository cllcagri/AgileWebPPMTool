package io.growbymastery.ppmtool.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Collection;
import java.util.Date;

@Entity
public class User implements UserDetails {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Email(message = "username needs to be an email.")
  @NotBlank(message = "username is required.")
  @Column(unique = true)
  private String username;

  @NotBlank(message = "Please enter full name.")
  private String fullName;

  @NotBlank(message = "password is required.")
  private String password;

  @Transient private String confirmPassword;

  @JsonFormat(pattern = "yyyy-mm-dd")
  private Date create_At;

  @JsonFormat(pattern = "yyyy-mm-dd")
  private Date update_At;

  @PrePersist
  protected void onCreate() {
    this.create_At = new Date();
  }

  @PreUpdate
  protected void onUpdate() {
    this.update_At = new Date();
  }

  public User() {}

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  @Override
  @JsonIgnore
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  @JsonIgnore
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  @JsonIgnore
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  @JsonIgnore
  public boolean isEnabled() {
    return true;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  @Override
  @JsonIgnore
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return null;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getConfirmPassword() {
    return confirmPassword;
  }

  public void setConfirmPassword(String confirmPassword) {
    this.confirmPassword = confirmPassword;
  }

  public Date getCreate_At() {
    return create_At;
  }

  public void setCreate_At(Date create_At) {
    this.create_At = create_At;
  }

  public Date getUpdate_At() {
    return update_At;
  }

  public void setUpdate_At(Date update_At) {
    this.update_At = update_At;
  }

  @Override
  public String toString() {
    return "User{"
        + "id="
        + id
        + ", username='"
        + username
        + '\''
        + ", fullName='"
        + fullName
        + '\''
        + ", password='"
        + password
        + '\''
        + ", confirmPassword='"
        + confirmPassword
        + '\''
        + ", create_At="
        + create_At
        + ", update_At="
        + update_At
        + '}';
  }
}